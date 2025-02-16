import styled, { css } from 'styled-components';

interface CartContainerProps {
  $hasItems: boolean;
  $seeDetail: boolean;
}

interface ExpandedProps {
  $isExpanded: boolean;
}

export const CartContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 100;
  max-width: 316px;
  right: 16px;
  margin-top: 8px;

  @media (min-width: 1376px) {
    right: calc((100vw - 1360px) / 2);
  }
`;

export const CartContent = styled.div<ExpandedProps>`
  max-height: ${(props) => (props.$isExpanded ? '100vh' : '50px')};
  opacity: ${(props) => (props.$isExpanded ? 1 : 0)};
  transform: translateY(${(props) => (props.$isExpanded ? '0' : '-20px')});
  transition: all 0.6s ease-in-out;
  width: 100%;
  overflow: hidden;
`;

export const CartStyled = styled.div<CartContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 6px;
  border-radius: 6px;
  background-color: #fff;
  border: 1px solid #ccc;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  ${(props) => {
    return css`
      width: ${props.$hasItems && props.$seeDetail
        ? '316px'
        : props.$hasItems
          ? '116px'
          : '50px'};
      max-height: ${props.$hasItems && props.$seeDetail
        ? '100vh'
        : props.$hasItems
          ? '100px'
          : '50px'};
      min-height: ${props.$hasItems ? '132px' : '50px'};
    `;
  }}
`;

export const CartQuantityNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 27px;
  bottom: 10px;
  border: 1px solid #d81616;
  background: #fff;
  color: #333;
  padding: 0 0.25rem;
  height: 1.125rem;
  border-radius: 0.625rem;
  font-size: 0.75rem;
  line-height: 1;

  & span {
    font-weight: 700;
  }
`;

export const SeeDetailsButtonContainer = styled.div`
  flex-direction: column;
  display: flex;
`;
