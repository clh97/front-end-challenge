import React, { Component } from 'react';

import Header from '../components/Header'

import Main from './Main';
import Catalog from './Catalog';

const StoreFront = () => (
  <React.Fragment>
    <Header />
    <Catalog />
  </React.Fragment>
)

class Home extends Component {
  render() {
    return (
      <Main children={
        <StoreFront />
      } />
    )
  }
}


export default Home;
