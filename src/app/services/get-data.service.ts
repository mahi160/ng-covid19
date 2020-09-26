import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Global } from '../models/global.model';
import { Country } from '../models/country.model';

const API_SUMMARY_URL = 'https://api.covid19api.com/summary';

@Injectable({ providedIn: 'root' })
export class GetDataService {
  loadSummary(): Observable<any> {
    return this.http.get<Global>(`${API_SUMMARY_URL}`);
  }
  getGlobal(): Observable<Global> {
    let data = JSON.parse(sessionStorage.getItem('Data'));

    if (data.Countries) {
      data = data.Global;
    } else {
      data = {
        noData: true,
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0,
      };
    }
    return of(data);
  }
  getCountry(cc: string): Observable<Country> {
    let data = JSON.parse(sessionStorage.getItem('Data'));
    let res: Country;
    if (data.Countries) {
      data = data.Countries;
      res = data.find((e) => e.CountryCode === cc);
    } else {
      res = {
        noData: true,
        Country: '',
        CountryCode: '',
        Slug: '',
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
      };
    }
    return of(res);
  }
  getDate(): Observable<string> {
    let data = JSON.parse(sessionStorage.getItem('Data'));
    data = data.Date;
    console.log(data);

    return of(data);
  }

  constructor(private http: HttpClient) {}
}
