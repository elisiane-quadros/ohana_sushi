import { Button } from 'antd';
import styled from 'styled-components';

interface ButtonLinkStyledProps {
  $isAppLink: boolean;
}

export const ButtonLinkStyled = styled(Button)<ButtonLinkStyledProps>`
  color: ${(props) => (props.$isAppLink ? '#d81616' : '#333')};
  background: transparent;
  border: none;
  padding: 4px;
  box-shadow: none;
  width: fit-content;
  height: fit-content;

  &.ant-btn:hover {
    color: ${(props) =>
      props.$isAppLink ? '#d81616 !important' : '#333 !important'}; // ;
    background: transparent !important;
    box-shadow: none;
  }

  &.ant-btn:hover span {
    opacity: 0.8;
    /* text-shadow: ${(props) =>
      props.$isAppLink
        ? '0 0.4px 0.25px #d81616dd'
        : '2px 2px 4px #333333dd'}; */
  }
`;
