import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home';

const root = document.getElementById('root');

ReactDOM.render(
  <Home />,
  root,
);

module.hot.accept();