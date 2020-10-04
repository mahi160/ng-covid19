import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-homeland',
  templateUrl: './homeland.component.html',
  styleUrls: ['./homeland.component.scss'],
})
export class HomelandComponent implements OnInit {
  homeCC = 'BD';
  home$: Observable<Country>;

  constructor(private data: GetDataService) {}

  ngOnInit(): void {
    this.home$ = this.data.getCountry(this.homeCC);
  }
}
