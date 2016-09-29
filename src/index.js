import 'babel-polyfill';
import '../assets/style';
import 'react-fa';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Top from './containers/Top';
import createStore from './stores';

const store = createStore();

window.onload = function () {
  ReactDOM.render(
    <Provider store={store} >
      <Top />
    </Provider>,
    document.getElementById('main')
  );
};

