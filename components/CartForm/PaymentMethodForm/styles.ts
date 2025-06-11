import { Button, Flex } from 'antd';
import styled from 'styled-components';

export const PaymentMethodFormContainer = styled(Flex)`
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 2px 2px 4px #d8161630;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
`;

interface PaymentMethodButtonProps {
  $isActive: boolean;
}

export const PaymentMethodButton = styled(Button)<PaymentMethodButtonProps>`
  display: flex;
  justify-content: center;
  gap: 0;
  width: 100%;
  height: 64px;
  background-color: ${(props) =>
    props.$isActive ? '#333 !important' : '#fff !important'};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.$isActive ? '#FFF !important' : ' #d9d9d9'};
  color: #fff !important;
  flex: 1;

  &.ant-btn:hover:not(:focus) {
    border-color: ${(props) => !props.$isActive && '#33333360 !important'};
    background-color: ${(props) => !props.$isActive && '#33333320 !important'};
    box-shadow: 1.5px 1.5px 4px #33333320 !important;
  }
`;

export const ReactIconContainer = styled(Flex)`
  width: 20px;
  & svg {
    height: 20px;
    width: 20px;
  }
`;
