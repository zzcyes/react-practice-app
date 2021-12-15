import initialState from './initialState';
import {
  reducer as computedCount,
  Action as computedCountAction,
} from './computedCount';
import { reducer as fetchData, Action as fetchDataAction } from './fetchData';

interface Action extends fetchDataAction, computedCountAction {}

const reducers = [computedCount, fetchData];

export default function reducer(state = initialState, action: Action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = { ...state };
      break;
  }
  return reducers.reduce((s, r) => r(s, action), { ...newState });
}
