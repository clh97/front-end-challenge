import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { media } from '../config/constants';

const Header = styled.header`
  width: 100vw;
  height: 10vh;
  
  ${media.mobile`background: red;`}
  ${media.tablet`background: blue;`}
  ${media.desktop`background: green;`}

`;

export default () => <Header />;
