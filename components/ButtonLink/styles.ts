import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonLinkStyled = styled(Button)`
  color: #d81616bb;
  background: transparent;
  border: none;
  padding: 4px;

  &.ant-btn:hover {
    color: #d81616 !important;
    background: transparent !important;
  }
`;
