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
import { Col, Flex, Popover, Row, Typography } from 'antd';
import useResponsive from '@/hooks/useResponsive';
import ButtonPrimary from '../ButtonPrimary';
import deliveryCostList from '../InputSendCalculation/mock';

const Header: React.FC = () => {
  const { isMdDown, isXs } = useResponsive();
  const { Text } = Typography;

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
              gap={16}
              style={{ maxWidth: '100%' }}
              className="neighborhoods"
            >
              <div />
              <Popover
                placement="bottomRight"
                content={
                  <Flex
                    style={{
                      maxWidth: isXs ? '90vw' : '420px',
                      padding: '8px 12px 8px 12px',
                    }}
                  >
                    <Row gutter={[12, 4]}>
                      {deliveryCostList.map((item) => (
                        <Col span={12} key={item.id}>
                          <Typography.Text strong>{item.name}</Typography.Text>
                        </Col>
                      ))}
                    </Row>
                  </Flex>
                }
                trigger="click"
              >
                <ButtonPrimary style={{ width: isXs ? '100%' : '420px' }}>
                  Bairros que atendemos
                </ButtonPrimary>
              </Popover>
            </Flex>
          </TextContainer>
        </HeaderContent>
      </Overlay>
    </HeaderContainer>
  );
};
export default Header;
