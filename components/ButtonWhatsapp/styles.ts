import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonWhatsappStyled = styled(Button)<{
  style?: React.CSSProperties;
}>`
  height: 60px;
  width: 200px;
  background: #00bb2d;
  color: #fff;
  border-radius: 15px;
  padding: 8px;

  &:hover {
    background: #00bb2d !important;
    color: #fff !important;
    border: none;
  }
`;
