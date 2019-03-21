import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-unresolved
import { media } from '../config/constants';

const HeaderComponent = styled.header`
  width: 100vw;
  height: 10vh;
  
  ${media.ultra`background: rebeccapurple;`}
  ${media.desktop`background: dodgerblue;`}
  ${media.tablet`background: mediumseagreen;`}
  ${media.phone`background: palevioletred;`}
`;

const Header = () => {

  return (
    <HeaderComponent>
      
    </HeaderComponent>
  )
}

// export default () => <header>teste</header>;
export default () => <Header />;
