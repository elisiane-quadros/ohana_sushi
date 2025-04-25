import { Button, Flex } from 'antd';
import styled from 'styled-components';

export const MaintenanceStatusContainer = styled(Flex)`
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
