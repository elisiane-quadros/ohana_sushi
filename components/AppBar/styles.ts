import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* width: 100vw;
  max-width: 100vw; */

  position: absolute;
`;

export const AppBarArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1376px;
  padding: 16px 16px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }
`;
