import { Store } from '@ngrx/store';
import { GetDataService } from './../services/get-data.service';
import { Injectable } from '@angular/core';
import {
  DataActionTypes,
  LoadData,
  DataLoaded,
  DataLoading,
} from './get-data.actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DataState } from './get-data.reducers';

@Injectable()
export class DataEffects {
  constructor(
    private dataService: GetDataService,
    private actions$: Actions,
    private store: Store<DataState>
  ) {}

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType<LoadData>(DataActionTypes.LoadData),
    tap(() => this.store.dispatch(new DataLoading(true))),
    mergeMap(() =>
      this.dataService.loadSummary().pipe(
        map((data) => {
          localStorage.setItem('Data', JSON.stringify(data));
          this.store.dispatch(new DataLoaded());
        }),
        catchError(() => EMPTY)
      )
    )
  );
}
