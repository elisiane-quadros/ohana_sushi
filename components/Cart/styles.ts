import styled from 'styled-components';

export const CartQuantityNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 14px;
  /* left: 10px; */
  bottom: 24px;
  border: 2px solid #d81616;
  background: #fff;
  color: #333;
  padding: 0 0.25rem;
  height: 1.125rem;
  border-radius: 0.625rem;
  font-size: 0.75rem;
  line-height: 1;
  cursor: pointer;

  & span {
    font-weight: 700;
  }

  @media (max-width: 1199px) {
    right: 16px;
  }

  @media (max-width: 575px) {
    right: 13px;
  }
`;

export const SeeDetailsButtonContainer = styled.div`
  flex-direction: column;
  display: flex;
`;
