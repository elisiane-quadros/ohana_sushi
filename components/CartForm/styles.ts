import { Flex } from 'antd';
import styled from 'styled-components';

export const CardContainer = styled(Flex)`
  padding: 0 16px;
  width: 100%;
`;

export const AddressAndPaymentContainer = styled(Flex)`
  flex-direction: column;
  gap: 16px;
  width: 100%;
  flex: 2;
`;

export const CartResumeContainer = styled(Flex)`
  flex-direction: column;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 2px 2px 4px #d8161630;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  flex: 1;
`;
