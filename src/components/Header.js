import React from 'react';
import styled from 'styled-components';
import BagStore from '../redux';

// eslint-disable-next-line import/no-unresolved
import { media } from '../config/constants';

import Menu from '../assets/menu.svg'
import Logo from '../assets/logo-amaro.svg'
import Bag from '../assets/bag.svg'

const HeaderComponent = styled.header`
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-areas: 'menu . logo . bag';

  width: 100vw;
  height: 10vh;
  background-color: #f1f1f1;
  
  ${media.ultra`
    
  `}
  ${media.desktop`
    
  `}
  ${media.tablet`
    
  `}
  ${media.phone`
    
  `}
`;

const MenuComponent = styled.img`
  grid-area: menu;
  width: 32px;
  height: 32px;
`;

const LogoComponent = styled.img`
  grid-area: logo;
`;

const BagComponent = styled.img`
  grid-area: bag;
  width: 32px;
  height: 32px;
`;


const Header = () => {
  return (
    <HeaderComponent>
      <MenuComponent src={Menu} />
      <LogoComponent src={Logo} />
      <BagComponent src={Bag} />
    </HeaderComponent>
  )
}

// export default () => <header>teste</header>;
export default () => <Header />;
