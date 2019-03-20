import React, { Component } from 'react';
import products from '../products.json';

export default class Catalog extends Component {
  render() {
    return (
      <div>
        
      </div>
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
