'use client';
import React from 'react';
import { HeaderContainer, Logo, Overlay } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Overlay>
        <Logo />
        <span>Seg a Dom das 18:00 às 23:00</span>
      </Overlay>
    </HeaderContainer>
  );
};
export default Header;
