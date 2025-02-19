import { Input, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const StyledInput = styled(Input)`
  &:hover {
    border-color: #d8161680;
  }

  &:focus {
    border-color: #d8161690;
    box-shadow: 0 0 0 1.5px #d8161620;
  }
`;

export const ErrorMessage = styled(Text)`
  color: red;
  font-size: 0.75rem;
`;
