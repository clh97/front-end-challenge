import React, { Component } from 'react';
import styled from 'styled-components';

// article or div? *thoughtful*
const ProductContainer = styled.article`
  display: inline-block;
  width: calc(50% - 1rem);
  height: 260px;
  margin: .5rem;
  background-color: purple;
  vertical-align: top;
`
const ProductImage = styled.img`
  max-width: 100%;
  padding: .33rem;
`

const placeholderImage = 'https://placekitten.com/g/470/594'
export default class Product extends Component {
  render() {
    return (
      <ProductContainer>
        <ProductImage src={this.validateImage(this.props.image) ? this.props.image : placeholderImage} />
      </ProductContainer>
    )
  }

  validateImage = url => {
    return url.match(/^https?:\/\//) !== null
  }
}
