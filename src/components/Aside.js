import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { media } from '../config/constants';

const NavComponent = styled.nav`
  display: inline-block;
  width: 320px;
  vertical-align: top;

  ${
    media.ultra`background: rebeccapurple;
  `}
  ${
    media.desktop`background: dodgerblue;
  `}
  ${
    media.tablet`
      display: block;
      width: 100%;
      height: 320px;
      background: mediumseagreen;
  `}
  ${
    media.phone`
      display: block;
      width: 100%;
      height: 320px;
      background: mediumseagreen;
  `}
`;

const Nav = (props) => {
  return (
    <NavComponent>
      {props.children}
    </NavComponent>
  )
}

export default Nav;
