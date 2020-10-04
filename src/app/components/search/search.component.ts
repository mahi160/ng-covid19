import { GetDataService } from 'src/app/services/get-data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryList } from 'src/app/models/country-list.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  countries: CountryList[];
  searchString: string[];
  name: string;
  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.countries = this.dataService.getCountryList();
  }
  getSearched(event): void {
    const x = event.target.value.toLowerCase().trim();
    this.searchString = [];
    if (x) {
      this.countries.forEach((e) => {
        if (e.name.toLowerCase().trim().includes(x)) {
          this.searchString.push(e.name);
        }
      });
    } else {
      this.searchString = [];
    }
  }
  countrySelected(item: string): void {
    let x = this.countries.filter((e) => {
      return e.name === item;
    });
    this.name = x[0].name;
    this.selected.emit(x[0].cc);
    this.searchString = [];
  }
}
