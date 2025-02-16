import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonPrimaryStyled = styled(Button)`
  background-color: #d81616bb;
  font-weight: 600;
  color: #fff !important;
  border: none;

  &.ant-btn:hover {
    background-color: #d81616 !important;
    color: #fff !important;
    border-color: transparent !important;
  }
`;
