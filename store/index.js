import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import decksReducer from '../reducers';

const middlewares = process.env.NODE_ENV === 'development' ?
  applyMiddleware(logger, thunk) :
  applyMiddleware(thunk);

const Store = createStore(
  decksReducer,
  compose(
    middlewares,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default Store;
