
import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage.react';

ReactDOM.render(
  <MainPage />
  , document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
