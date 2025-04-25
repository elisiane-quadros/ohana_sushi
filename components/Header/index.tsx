'use client';

import React from 'react';
import {
  HeaderContainer,
  HeaderContent,
  HeaderText,
  HeaderTextIntroduction,
  HightLightText,
  OhanaSushi,
  Overlay,
  TextContainer,
} from './styles';
import { Flex, Typography } from 'antd';
import useResponsive from '@/hooks/useResponsive';

const Header: React.FC = () => {
  const { isMdDown } = useResponsive();

  return (
    <HeaderContainer>
      <Overlay>
        <HeaderContent>
          <TextContainer>
            <Flex vertical style={{ margin: '16px 0' }}>
              <OhanaSushi level={1} isMdDown={isMdDown}>
                Ohana Sushi Delivery
              </OhanaSushi>
              <HeaderTextIntroduction isMdDown={isMdDown} level={2}>
                <HightLightText>Culinária Japonesa</HightLightText>
              </HeaderTextIntroduction>
            </Flex>
            <Flex
              vertical
              gap={0}
              style={{ maxWidth: `${isMdDown ? '300px' : '430px'}` }}
            >
              <HeaderText isMdDown={isMdDown}>
                Sabores incríveis e qualidade só aqui no Ohana Sushi Delivery.
                Peça e experimente o melhor da comida japonesa na{' '}
                <HightLightText>Zona Sul de Porto Alegre.</HightLightText>
              </HeaderText>
            </Flex>
          </TextContainer>
        </HeaderContent>
      </Overlay>
    </HeaderContainer>
  );
};
export default Header;
