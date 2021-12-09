import initialState from './initialState';
import { reducer as computedCount, Action } from './computedCount';

const reducers = [computedCount];

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
