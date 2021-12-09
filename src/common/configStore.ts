import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// NOTE: Do not change middleares delaration pattern since rekit plugins may register middlewares to it.
const middlewares = [thunk];

let devToolsExtension = (f: any) => f;

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require('redux-logger');

  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export default function configStore(initialState?: any) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), devToolsExtension),
  );

  return store;
}
