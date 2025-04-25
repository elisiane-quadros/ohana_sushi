import { Flex, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const AddressFormContainer = styled(Flex)`
  background: #fff;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
`;

export const ErrorMessage = styled(Text)`
  color: red;
  font-size: 0.75rem;
`;
