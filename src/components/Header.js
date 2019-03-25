import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { media } from '../config/constants';

const HeaderComponent = styled.header`
  width: 100vw;
  height: 10vh;
  
  ${media.ultra`
    
  `}
  ${media.desktop`
    
  `}
  ${media.tablet`
    
  `}
  ${media.phone`
    
  `}
`;

const Header = () => {

  return (
    <HeaderComponent>
      header
    </HeaderComponent>
  )
}

// export default () => <header>teste</header>;
export default () => <Header />;
