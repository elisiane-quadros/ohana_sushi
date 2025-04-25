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
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  flex: 1;
`;
