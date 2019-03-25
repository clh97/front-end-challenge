import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { media } from '../config/constants';

const NavComponent = styled.nav`
  display: inline-block;
  width: 320px;
  vertical-align: top;

  ${
    media.ultra`

  `}
  ${
    media.desktop`

  `}
  ${
    media.tablet`
      display: block;
      width: 100%;
      height: 15vh;
  `}
  ${
    media.phone`
      display: block;
      width: 100%;
      height: 15vh;
  `}
`;

const Nav = (props) => {
  return (
    <NavComponent>
      nav
      {props.children}
    </NavComponent>
  )
}

export default Nav;
