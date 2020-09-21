import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navList = [
    { name: 'Countries', path: 'countries' },
    { name: 'World', path: 'world' },
    { name: 'Homeland', path: 'homeland' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
