import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  background-color: #fff;
  border-radius: 4px;
  width: 300px;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
   */
  box-shadow: 4px 4px 20px #d8161630;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  font-family: var(--inria-sans), sans-serif;
`;

export const RedDivider = styled.div`
  width: 100%;
  height: 1px;
  box-shadow: 0px 2px 2px #d81616;
  margin: 4px 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  height: 213px;
  width: 284px;
`;

export const IngredientContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IngredientItem = styled.div`
  display: flex;
  gap: 6px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
