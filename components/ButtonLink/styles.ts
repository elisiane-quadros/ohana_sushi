import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonLinkStyled = styled(Button)`
  color: #d81616;
  background: transparent;
  border: none;
  padding: 4px;

  &.ant-btn:hover {
    color: #d81616 !important;
    background: transparent !important;
    box-shadow: none;
  }

  &.ant-btn:hover span {
    text-shadow: 2px 2px 4px #d81616dd;
  }
`;
