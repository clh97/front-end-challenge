import React, { Component } from 'react';
import styled from 'styled-components';

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
