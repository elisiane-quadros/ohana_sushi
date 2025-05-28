import { Button } from 'antd';
import styled from 'styled-components';

interface ButtonStyledProps {
  invert: boolean;
}

export const ButtonPrimaryStyled = styled(Button)<ButtonStyledProps>`
  background-color: ${(props) => (props.invert ? '#FFF' : '#d81616')};
  font-weight: 600;
  color: #fff !important;
  border: 1px solid transparent !important;
  height: 40px;
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 0 1.5rem;

  &.ant-btn:hover {
    background-color: #7f1e1e !important;
    border: 1px solid #d81616 !important;
  }
`;
