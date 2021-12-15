import { CommonAction } from 'common/rootReducer';
import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './constants';
import { InitialState } from './initialState';

export function fetchDataBegin() {
  return {
    type: FETCH_DATA_BEGIN,
  };
}

export function fetchDataSuccess(data: any) {
  return {
    type: FETCH_DATA_SUCCESS,
    data: data,
  };
}

export function fetchDataFailure(error: any) {
  return {
    type: FETCH_DATA_FAILURE,
    error: error,
  };
}

export interface Action extends CommonAction {
  data: any;
  error: any;
}

export function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return { ...state };
  }
}
