import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';
import * as reducers from '../reducers/index';
import { routeReducer } from 'redux-simple-router';

let createStoreWithMiddleware;

if (__DEV__) {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}

const rootReducer = combineReducers(Object.assign({}, reducers, {
	routing: routeReducer
}));

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
