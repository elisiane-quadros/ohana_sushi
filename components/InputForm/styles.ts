import { Input, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const StyledInput = styled(Input)`
  border-radius: 6px;

  &:hover:not(:focus) {
    border-color: #33333360;
    box-shadow: 1.5px 1.5px 4px #33333320 !important;
  }

  &:focus {
    border-color: #333 !important;
  }
`;

export const ErrorMessage = styled(Text)`
  color: red;
  font-size: 0.75rem;
`;
