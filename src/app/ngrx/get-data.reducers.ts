import { DataAction, DataActionTypes } from './get-data.actions';

export interface DataState {
  dataLoading: boolean;
  dataLoaded: number;
}

export const initState: DataState = {
  dataLoading: true,
  dataLoaded: 0,
};

export function DataReducer(state = initState, action: DataAction): DataState {
  switch (action.type) {
    case DataActionTypes.DataLoading:
      return { ...state, dataLoading: action.payload };
    case DataActionTypes.DataLoaded:
      return { ...state, dataLoaded: state.dataLoaded + 1, dataLoading: false };
    default:
      return state;
  }
}
