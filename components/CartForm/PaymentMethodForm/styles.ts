import { Button, Flex } from 'antd';
import styled from 'styled-components';

export const PaymentMethodFormContainer = styled(Flex)`
  background: #fff;
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
  height: 64px;
  background-color: ${(props) =>
    props.$isActive ? '#333 !important' : '#fff !important'};
  /* #f2f2f2  */
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.$isActive ? '#FFF !important' : ' #d9d9d9'};
  /* #d9d9d9 */
  color: #fff !important;
  flex: 1;
  /* box-shadow: ${(props) =>
    props.$isActive && '0 0 0 1.5px #d8161620 !important'}; */

  &.ant-btn:hover:not(:focus) {
    border-color: ${(props) => !props.$isActive && '#33333360 !important'};
    background-color: ${(props) => !props.$isActive && '#33333320 !important'};
    box-shadow: 1.5px 1.5px 4px #33333320 !important;
  }
`;

export const ReactIconContainer = styled(Flex)`
  width: 24px;
  & svg {
    height: 24px;
  }
`;
