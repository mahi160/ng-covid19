import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../models/global.model';

const API_SUMMARY_URL = 'https://api.covid19api.com/summary';
@Injectable({ providedIn: 'root' })
export class GetDataService {
  loadSummary(): Observable<Global> {
    return this.http.get<Global>(`${API_SUMMARY_URL}`);
  }
  getGlobal() {
    return JSON.parse(localStorage.getItem('Data'));
  }
  returnGlobal(): Observable<any> {
    const data = this.getGlobal();
    return data.Global;
  }
  constructor(private http: HttpClient) {}
}
