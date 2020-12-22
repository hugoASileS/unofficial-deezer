import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const generateStore = () => {
  const loggerMiddleware = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, sagaMiddleware))),
    runSaga: sagaMiddleware.run,
  };
};
