
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import appReducer from './reducer';

export default function configureStore() {
  const middleware = [];
  const initialState = {};
  const logger = createLogger({
    collapsed: true
  });

  middleware.push(logger);

  const store = createStore(
    appReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers.
    module.hot.accept('./reducer', () => {
      const nextAppReducer = require('./reducer');
      store.replaceReducer(nextAppReducer);
    });
  }

  return store;
}
