import { Action } from '@ngrx/store';

export enum DataActionTypes {
  LoadData = '[Data] load',
  DataLoading = '[Data] loading',
  DataLoaded = '[Data] loaded',
}

export class LoadData implements Action {
  readonly type = DataActionTypes.LoadData;
}

export class DataLoading implements Action {
  readonly type = DataActionTypes.DataLoading;
  constructor(public payload: boolean) {}
}
export class DataLoaded implements Action {
  readonly type = DataActionTypes.DataLoaded;
}

export type DataAction = LoadData | DataLoading | DataLoaded;
