import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-homeland',
  templateUrl: './homeland.component.html',
  styleUrls: ['./homeland.component.scss'],
})
export class HomelandComponent implements OnInit {
  homeland = 'Bangladesh';
  homeCC = 'BD';
  home$: Observable<Country>;
  cards = [
    { name: 'Confirmed', new: 'NewConfirmed', total: 'TotalConfirmed' },
    { name: 'Recovered', new: 'NewRecovered', total: 'TotalRecovered' },
    { name: 'Deaths', new: 'NewDeaths', total: 'TotalDeaths' },
  ];
  constructor(private data: GetDataService) {}

  ngOnInit(): void {
    this.home$ = this.data.getCountry(this.homeCC);
  }
}
