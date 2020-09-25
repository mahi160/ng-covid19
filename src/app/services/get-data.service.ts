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
    data = data.Global;
    return of(data);
  }
  getCountry(cc: string): Observable<Country> {
    let data = JSON.parse(sessionStorage.getItem('Data'));
    data = data.Countries;
    const res = data.find((e) => e.CountryCode === cc);
    return of(res);
  }

  constructor(private http: HttpClient) {}
}
