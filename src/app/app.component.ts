import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { DataState } from './ngrx/get-data.reducers';
import { LoadData } from './ngrx/get-data.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<DataState>) {
    this.store.dispatch(new LoadData());
  }
}
