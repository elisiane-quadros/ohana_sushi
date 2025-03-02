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
`;

export const AppBarArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1376px;
  height: 100px;
  padding: 16px 16px;
`;

export const HomeButton = styled(Button)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover {
    background: transparent !important;
  }
`;
