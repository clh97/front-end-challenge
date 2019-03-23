import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../config/constants';
import products from '../products.json';

import Loading from '../components/Loading';
import Error from '../components/Error';
import Product from '../components/Product';

const CatalogContainer = styled.section` 
  display: inline-block;
  padding: 1rem;
  background-color: #f1f1f1;

  ${
    media.ultra`
      width: calc(100% - 320px);
      background: rebeccapurple;
  `}
  ${
    media.desktop`
      width: calc(100% - 320px);
      background: dodgerblue;
  `}
  ${
    media.tablet`
      width: 100%;
      background: mediumseagreen;
  `}
  ${
    media.phone`
      width: 100%;
      background: palevioletred;
  `}
`

export default class Catalog extends Component {
  state = {
    error: undefined,
    products: undefined,
    loading: true
  }

  componentDidMount() {
    this.fetchProducts()
      .then(res => {
        const { products } = res;

        products.length <= 0 ?
          this.setState({ error: 'There are no products here.' }) :
          this.setState({ products, loading: false }, () => console.log(products))
      })
      .catch(error => {
        this.setState({
          error
        })
      })
  }

  render() {
    const { error, products, loading } = this.state;

    if(loading) {
      return <Loading />
    }

    if(error) {
      return <Error msg={`Something went wrong in the catalog: ${error}`} />
    }

    return (
      <CatalogContainer>
        {
          // obs: not proud of using index as key, but I really hate warnings..
          products.map((product, index) => <Product key={index} {...product} />)
        }
      </CatalogContainer>
    )
  }

  fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(products) {
          resolve(products)
        } else {
          reject('could not find products')
        }
      }, 30);
    })
  }
}
