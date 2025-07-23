import { Flex } from 'antd';
import styled from 'styled-components';

interface ProductCardContainerFlexProps {
  $hasProduct: boolean;
  $isXs: boolean;
  $isMdDown: boolean;
  $position: number | null;
}

export const ProductCardContainerFlex = styled(
  Flex,
)<ProductCardContainerFlexProps>`
  width: 296px;
  min-height: ${(props) =>
    props.$isXs ? '168px' : props.$isMdDown ? '210px' : '240px'};
  border-radius: ${(props) =>
    props.$isXs && props.$position === 0
      ? '4px 0 0 4px'
      : props.$isXs && props.$position === 1
        ? '0 4px 4px 0'
        : props.$isXs && props.$position === 2
          ? '4px 0 0 4px'
          : props.$isXs && props.$position === 3
            ? '0 4px 4px 0'
            : '4px'};
  box-shadow: ${(props) =>
    props.$hasProduct ? '2px 2px 4px #00000030' : '2px 2px 4px #00000030'};
  border: ${(props) =>
    props.$hasProduct ? '1px solid #d81616aa' : '1px solid #00000030'};

  &:hover {
    box-shadow: ${(props) =>
      props.$hasProduct
        ? '3px 3px 5px #d81616aa !important'
        : '4px 4px 6px #00000030 !important'};
  }

  @media (max-width: 1366px) {
    width: 100%;
  }
`;
