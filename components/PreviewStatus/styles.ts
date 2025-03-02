import { Button, Flex } from 'antd';
import styled from 'styled-components';

export const PreviewStatusContainer = styled(Flex)`
  padding: 16px;

  & h2 {
    font-family: var(--inria-sans), sans-serif !important;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 12px;
  }

  & span {
    text-align: center;
    line-height: 1.3;
  }
`;

export const WhatsappButton = styled(Button)`
  height: 60px;
  width: 200px;
  background: #00bb2d;
  color: #fff;
  border-radius: 15px;
  padding: 8px;

  &:hover {
    background: #00bb2d !important;
    color: #fff !important;
    border: none;
  }
`;
