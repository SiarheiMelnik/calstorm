
import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage.react';
import { Provider } from 'react-redux';
import configureStore from './common/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
  , document.getElementById('app')
);
