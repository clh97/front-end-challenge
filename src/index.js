import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home';

const root = document.querySelector('#root');

ReactDOM.render(
  React.createElement(Home),
  root,
);

// module.hot.accept();