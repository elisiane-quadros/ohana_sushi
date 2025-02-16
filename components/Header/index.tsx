'use client';
import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HightLightText,
  Overlay,
  TextContainer,
} from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Overlay>
        <HeaderContent>
          <TextContainer>
            <h2>
              Sabores <HightLightText>incríveis</HightLightText> e qualidade só
              aqui no <HightLightText>Ohana Sushi</HightLightText>
            </h2>
            <span>
              Peça e experimente o melhor{' '}
              <HightLightText>Delivery</HightLightText> da Zona Sul de Porto
              Alegre.
            </span>
          </TextContainer>
        </HeaderContent>
      </Overlay>
    </HeaderContainer>
  );
};
export default Header;
