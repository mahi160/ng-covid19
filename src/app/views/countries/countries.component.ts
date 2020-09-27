import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  @Input() countryCode: string;
  constructor() {}

  ngOnInit(): void {
    this.countryCode = 'In';
  }
}
