import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../models/global.model';

const API_SUMMARY_URL = 'https://api.covid19api.com/summary';
@Injectable({ providedIn: 'root' })
export class GetDataService {
  getSummary(): Observable<Global> {
    return this.http.get<Global>(`${API_SUMMARY_URL}`);
  }
  getCountry(countryCode: string): Observable<any> {
    return this.http.get<any>(`${API_SUMMARY_URL}`);
  }
  constructor(private http: HttpClient) {}
}
