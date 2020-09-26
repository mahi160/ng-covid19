import { GetDataService } from 'src/app/services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { CountryList } from 'src/app/models/country-list.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // countries = [{ name: 'Bangladesh' }, { name: 'India' }, { name: 'Pakistan' }];
  countries: CountryList[];
  searchString: string[];
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
    console.log(`%c ${this.searchString}`, 'color: orange');
  }
}
