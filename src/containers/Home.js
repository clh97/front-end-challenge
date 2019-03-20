import React from 'react';

import Header from '../components/Header'

import Main from './Main';
import Catalog from './Catalog';

console.dir(Main)

const Home = () => (
  <Main>
    <Header />
    <Catalog />
  </Main>
);

export default Home;
