import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../config/constants';

// article or div? *thoughtful*
const ProductContainer = styled.article`
  position: relative;
  display: inline-block;
  width: calc(50% - 1rem);
  margin: 1rem .5rem;
  vertical-align: top;

  ${media.ultra`max-width: calc(100% / 4 - 1rem);`}
  ${media.desktop`max-width: calc(100% / 4 - 1rem);`}
  ${media.tablet`max-width: calc(100% / 2 - 1rem);`}
  ${media.phone`max-width: calc(100% / 2 - 1rem);`}

  ${ ({ discount }) => (discount > 0) && `
    &::before {
      content: '${discount.toString()}% OFF';
      position: absolute;
      top: 4px;
      left: -12px;
      background-color: rgba(255, 0, 0, .8);
      padding: .2rem;
      color: #f1f1f1;
      transform: rotate(-45deg);
    }
  ` }
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
  padding: .1rem;
  color: ${({ available }) => available ? 'black' : 'gray'};
  border: 1px solid rgba(0, 0, 0, .1);
  text-decoration: ${({ available }) => !available && 'line-through'};
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

const CartButton = styled.button`
  all: unset; /* problems in  SAFARI / IE browsers. just a commodity. */
  width: 100%;
  height: 24px;
  background-color: chartreuse;
  text-align: center;
  border-radius: 4px;
  transition: background-color .33s ease-in-out;
  font-weight: bolder;
  color: white;
  user-select: none;

  &:active {
    background-color: rgba(0, 255, 0, .5);
    box-shadow: 0 0 1px rgba(0, 0, 0, .33);
    color: #f1f1f1;
  }
`

const placeholderImage = 'https://placekitten.com/g/470/594'
export default class Product extends Component {
  render() {
    return (
      <ProductContainer discount={parseInt(this.props.discount_percentage)}>
        <ProductImage src={this.validateImage(this.props.image) ? this.props.image : placeholderImage} alt={this.props.name} />
        <ProductName>{this.props.name}</ProductName>
        <Sizes {...this.props} />
        <Prices {...this.props} />
        <CartButton>add to cart</CartButton>
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