import '../assets/style';
import 'react-fa';
import React from 'react';
import ReactDOM from 'react-dom';
import Top from './containers/Top';

window.onload = function() {
  ReactDOM.render(<Top />, document.getElementById('main'));

  if (module.hot) {
    module.hot.accept(function(err) {
      if (err) console.error(err);
    });
  }
}

// vim: ft=javascript.jsx

