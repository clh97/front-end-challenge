import React, { Component } from 'react';
import styled from 'styled-components';

// article or div? *thoughtful*
const ProductContainer = styled.article`
  display: inline-block;
  width: calc(50% - 1rem);
  margin: .5rem;
  vertical-align: top;
`
const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
`

const ProductName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  text-transform: uppercase;
  text-align: center;
`

const SizeBar = styled.ul`
  display: grid;
  grid-template-columns: ${({ sizes }) => `repeat(${sizes.length}, 1fr)`};
  justify-content: space-evenly;
  text-align: center;
  margin: .15rem .5rem;
`

const SizeBarItem = styled.li`
  color: ${({ available }) => available ? 'black' : 'gray'};
  text-decoration: ${({ available }) => !available && 'line-through'};
  padding: .1rem;
  border: 1px solid rgba(0, 0, 0, .1);
`

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const PriceText = styled.span`
  text-decoration: ${({ sale }) => sale ? 'line-through' : 'none'};
  font-size: ${({ sale }) => sale ? '.8rem' : '1rem'};
  font-weight: ${({ bold }) => bold && 'bold'};
`

const placeholderImage = 'https://placekitten.com/g/470/594'
export default class Product extends Component {
  render() {
    return (
      <ProductContainer>
        <ProductImage src={this.validateImage(this.props.image) ? this.props.image : placeholderImage} alt={this.props.name} />
        <ProductName>{this.props.name}</ProductName>
        <Sizes {...this.props} />
        <Prices {...this.props} />
      </ProductContainer>
    )
  }

  validateImage = url => {
    return url.match(/^https?:\/\//) !== null
  }
}

const Sizes = props => (
  <SizeBar sizes={props.sizes}>
    {
      props.sizes.map(s => (
        <SizeBarItem key={s.sku} {...s}>
          {s.size}
        </SizeBarItem>
      ))
    }
  </SizeBar>
)

const Prices = props => (
  <PriceContainer>
    <PriceText sale={props.on_sale}>
      {props.regular_price}
    </PriceText>
    {
      props.on_sale &&
      <PriceText bold={true}>
        {props.actual_price}
      </PriceText>
    }
  </PriceContainer>
)