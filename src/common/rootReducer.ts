import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import demoReducer from 'features/demo/redux/reducer';
import { InitialState as DemoInitialState } from 'features/demo/redux/initialState';

export interface CommonAction {
  type: string;
  [key: string]: any;
}

export interface State {
  demo: DemoInitialState;
}

const reducerMap = {
  // router: routerReducer,
  demo: demoReducer,
};

export default combineReducers(reducerMap);
