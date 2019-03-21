import React from 'react';
import styled from 'styled-components';

// http://tobiasahlin.com/spinkit/ => tks for those nice spinners :D
// @keyframes in ~/style.css file
const Spinner = styled.div`
  width: auto;
  height: 100%;
  margin: 2rem auto 0;
  text-align: center;

  & > div {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin: 0 .1rem;
    
    opacity: .75;
    border-radius: 100%;
    background-color: rebeccapurple;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  & > div:nth-child(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & > div:nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;

export default () => (
  <Spinner>
    <div></div>
    <div></div>
    <div></div>
  </Spinner>
)