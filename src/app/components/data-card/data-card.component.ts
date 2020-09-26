import { Global } from './../../models/global.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss'],
})
export class DataCardComponent implements OnInit {
  @Input() data: Global;
  @Input() pageTitle: string;

  cards = [
    {
      name: 'Recovered',
      new: 'NewRecovered',
      total: 'TotalRecovered',
      // image: '../../../assets/images/horse.jpg',
      image:
        'repeating-linear-gradient(135deg, rgb(18, 182, 56) 0px, rgb(18, 182, 56) 16px,rgb(13, 209, 68) 16px, rgb(13, 209, 68) 108px,rgb(23, 154, 43) 108px, rgb(23, 154, 43) 246px)',
      newD: 0,
      totalD: 0,
    },
    {
      name: 'Confirmed',
      new: 'NewConfirmed',
      total: 'TotalConfirmed',
      // image: '../../../assets/images/bear.jpg',
      image:
        'repeating-linear-gradient(130deg, rgb(223, 142, 17) 0px, rgb(223, 142, 17) 41px,rgb(221, 125, 11) 41px, rgb(221, 125, 11) 102px,rgb(225, 158, 23) 102px, rgb(225, 158, 23) 187px,rgb(227, 175, 29) 187px, rgb(227, 175, 29) 197px,rgb(229, 191, 35) 197px, rgb(229, 191, 35) 211px)',
      newD: 0,
      totalD: 0,
    },
    {
      name: 'Deaths',
      new: 'NewDeaths',
      total: 'TotalDeaths',
      // image: '../../../assets/images/wolf.jpg',
      image:
        'repeating-linear-gradient(135deg, rgb(216, 62, 60) 0px, rgb(216, 62, 60) 116px,rgb(167, 20, 66) 116px, rgb(167, 20, 66) 157px,rgb(192, 41, 63) 157px, rgb(192, 41, 63) 271px)',
      newD: 0,
      totalD: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.cards[0].newD = this.data.NewRecovered;
    this.cards[0].totalD = this.data.TotalRecovered;
    this.cards[1].newD = this.data.NewConfirmed;
    this.cards[1].totalD = this.data.TotalConfirmed;
    this.cards[2].newD = this.data.NewDeaths;
    this.cards[2].totalD = this.data.TotalDeaths;
    console.log(this.cards);
  }
  Style(i): object {
    return {
      backgroundImage: this.cards[i].image,
    };
  }
}
