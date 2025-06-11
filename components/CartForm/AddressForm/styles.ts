import { Flex, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const AddressFormContainer = styled(Flex)`
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 2px 2px 4px #d8161630;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
`;

export const ErrorMessage = styled(Text)`
  color: red;
  font-size: 0.75rem;
`;
