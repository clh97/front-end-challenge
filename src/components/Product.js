import React, { PureComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../config/constants';
import { connect } from 'react-redux'
import redux, { addToCart } from '../redux';

const placeholderImage = 'https://placekitten.com/g/470/594'
class Product extends PureComponent {

  state = {
    selected_size: undefined,
    error: undefined
  }

  render() {
    return (
      <ProductContainer discount={parseInt(this.props.product.discount_percentage)}>
        <ProductImage src={this.validateImage(this.props.product.image) ? this.props.product.image : placeholderImage} alt={this.props.product.name} />
        <ProductName>{this.props.product.name}</ProductName>
        <Sizes onChangeSize={this.onChangeSize} {...this.props.product} />
        <Prices {...this.props.product} />
        <CartButton onClick={() => this.addProduct(this.props.product)}>add to cart</CartButton>
      </ProductContainer>
    )
  }

  addProduct = product => {

    const { selected_size } = this.state;

    if(!selected_size) {
      alert('you must select a size first!')
      return;
    }

    const newProduct = {
      ...product,
      selected_size
    }

    this.props.addToCart(newProduct)
  }

  onChangeSize = selected_size => {
    this.setState({
      selected_size
    })
  }

  validateImage = url => {
    return url.match(/^https?:\/\//) !== null
  }
}

const Sizes = props => {
  const [ size, sizeSelector ] = useState(undefined);

  useEffect(() => {
    size && props.onChangeSize(size)
  })

  return (
  <SizeBar sizes={props.sizes}>
    {
      props.sizes.map(s => (
        <SizeBarItem selected={size == s.size} onClick={() => sizeSelector(s.size)} key={s.sku} {...s}>
          {s.size}
        </SizeBarItem>
      ))
    }
  </SizeBar>
)}

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
      transition: transform .25s ease-in-out;
    }

    &:hover:before {
      transform: scale(1.25) rotate(-45deg);
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
  text-decoration: ${({ available }) => !available && 'line-through'};
  user-select: none;
  color: ${({ available }) => available ? 'black' : 'gray'};
  cursor: ${({ available }) => available ? 'pointer' : 'not-allowed'}; 
  border: ${({ selected }) => selected ? '1px solid red' : '1px solid rgba(0, 0, 0, .1)' } ;
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
  margin: .33rem 0;
  text-align: center;
  text-align: center;
  font-weight: bolder;
  user-select: none;
  color: white;
  border-radius: 4px;
  background-color: chartreuse;
  cursor: pointer;
  transition: background-color .33s ease-in-out;

  &:active {
    background-color: rgba(0, 255, 0, .5);
    box-shadow: 0 0 1px rgba(0, 0, 0, .33);
    color: #f1f1f1;
  }
`

const mapDispatchToProps = { addToCart }

export default connect(null, mapDispatchToProps)(Product);