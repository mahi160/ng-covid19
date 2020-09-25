import { Global } from './../../models/global.model';
import { GetDataService } from './../../services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit {
  globalData$: Observable<Global>;
  cards = [
    { name: 'Confirmed', new: 'NewConfirmed', total: 'TotalConfirmed' },
    { name: 'Recovered', new: 'NewRecovered', total: 'TotalRecovered' },
    { name: 'Deaths', new: 'NewDeaths', total: 'TotalDeaths' },
  ];
  constructor(private data: GetDataService) {}

  ngOnInit(): void {
    this.globalData$ = this.data.getGlobal();
  }
}
