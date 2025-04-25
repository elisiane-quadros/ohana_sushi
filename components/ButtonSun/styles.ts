import { Button, Flex } from 'antd';
import styled from 'styled-components';

export const ButtonSunStyled = styled(Button)`
  background: transparent;
  border: none;
  padding: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;

  &:hover {
    background: transparent !important;
    border: none;
    opacity: 0.85;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const SunImageFlex = styled(Flex)`
  position: relative;
  top: 8px;
`;

export const IconImageFlex = styled(Flex)`
  position: relative;
  top: -14px;
`;
