import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import redux from '../redux';

import Header from '../components/Header'
import Nav from '../components/Nav'

import Main from './Main';
import Catalog from './Catalog';

const StoreFront = () => (
  <React.Fragment>
    <Header />
    <Nav />
    <Catalog />
  </React.Fragment>
)

export default () => (
  <Provider store={redux.store}>
    <PersistGate loading={null} persistor={redux.persistor}>
      <Main children={ <StoreFront /> } />
    </PersistGate>
  </Provider>
);
