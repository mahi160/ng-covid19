import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-homeland',
  templateUrl: './homeland.component.html',
  styleUrls: ['./homeland.component.scss'],
})
export class HomelandComponent implements OnInit {
  // globalData$: Observable<Global>;
  homeland = 'Bangladesh';
  home: object;
  cards = [
    { name: 'Confirmed', new: 'NewConfirmed', total: 'TotalConfirmed' },
    { name: 'Recovered', new: 'NewRecovered', total: 'TotalRecovered' },
    { name: 'Deaths', new: 'NewDeaths', total: 'TotalDeaths' },
  ];
  constructor(private data: GetDataService) {}

  ngOnInit(): void {
    this.data.getCountry(this.homeland).subscribe((res) => {
      res = res.Countries;
      let i = 0;
      const data = () => {
        if (res[i].Country === this.homeland) {
          this.home = res[i];
        } else {
          i++;
          data();
        }
      };
      data();
    });
  }
}
