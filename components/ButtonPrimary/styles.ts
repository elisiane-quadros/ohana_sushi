import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonPrimaryStyled = styled(Button)`
  background-color: #333333bb;
  font-weight: 600;
  color: #fff !important;
  border: none;

  &.ant-btn:hover {
    background-color: #333 !important;
    color: #fff !important;
    border-color: transparent !important;
  }
`;
