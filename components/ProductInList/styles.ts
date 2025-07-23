import { Flex } from 'antd';
import styled from 'styled-components';

export const FlexContentList = styled(Flex)`
  width: 100%;
  max-width: 480px;
  padding: 8px 0;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: 1199px) {
    max-width: 380px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
