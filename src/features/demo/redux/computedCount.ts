import { CommonAction } from 'common/rootReducer';
import { COUNT_INCREMENTED, COUNT_DECREMENTED } from './constants';
import { InitialState } from './initialState';

export function decrementCount(step?: number) {
  return {
    type: COUNT_DECREMENTED,
    step: step || 1,
  };
}

export function incrementCount(step?: number) {
  return {
    type: COUNT_INCREMENTED,
    step: step || 1,
  };
}

export interface Action extends CommonAction {
  step: number;
}

export function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case COUNT_INCREMENTED:
      return {
        ...state,
        value: state.value + action.step,
      };
    case COUNT_DECREMENTED:
      return {
        ...state,
        value: state.value - action.step,
      };
    default:
      return { ...state };
  }
}
