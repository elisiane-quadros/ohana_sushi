import { Button } from 'antd';
import styled from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  z-index: 10;
  /* background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1),
    rgba(26, 25, 24, 0.1),
    rgba(46, 44, 42, 0.85),
    rgba(56, 54, 62, 0.95),
    rgba(66, 64, 62, 0.98)
  ); */
`;

export const AppBarArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1376px;
  height: 100px;
  padding: 0 8px;
`;

export const HomeButton = styled(Button)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0;
  box-shadow: none;

  &:hover {
    background: transparent !important;
  }
`;
