import styled from 'styled-components';
import { Flex } from 'antd';

export const SeeDetailsButtonContainer = styled.div`
  flex-direction: column;
  display: flex;
`;

export const ItemsContainerFlex = styled(Flex)`
  overflow-y: auto;
  max-height: 40vh;

  @media (max-height: 640px) {
    max-height: 30vh;
  }

  @media (max-height: 560px) {
    max-height: 20vh;
  }

  @media (max-height: 480px) {
    max-height: 72px;
  }

  @media (max-height: 440px) {
    max-height: 64px;
  }

  @media (max-height: 412px) {
    max-height: 52px;
  }
`;
