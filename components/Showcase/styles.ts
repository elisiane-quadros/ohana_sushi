import { Flex, Typography, Button } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ShowcaseContainerFlex = styled(Flex)`
  background: #f7f7f7;
  min-height: calc(100vh - 500px);
  width: 100%;
`;

export const ShowCaseFlex = styled(Flex)`
  /* width: 100%; */
  width: calc(100vw - 8px);
  max-width: 1196px;
  /* max-width: fit-content; */
  /* max-width: 1472px; */
  padding: 32px 0;

  @media (min-width: 992px) {
    width: calc(100vw - 196px);
  }
`;

export const ProductTypeSelectFlex = styled(Flex)`
  width: 164px;
  height: 480px;
  background: #131313;
`;

export const SearchAnFilterFlex = styled(Flex)`
  width: 100%;
  max-width: 1376px;
  padding: 16px 8px;

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

export const LeftPanelArea = styled(Flex)`
  width: 180px;
  padding: 32px 0px 16px 8px;
  background: transparent;
  position: sticky;
  top: 72;
  margin-bottom: -72;
  z-index: 999;
  height: 100vh;

  @media (min-width: 768px) {
    padding: 32px 0px 16px 16px;
  }
`;

export const ProductTypeTitleFlex = styled(Flex)`
  width: fit-content;
  margin-left: 56px;
  height: 48px;
  background-image: url('/images/brush_red.png');
  background-repeat: no-repeat;
  background-size: 100% 48px;

  @media (max-width: 575px) {
    margin-left: 16px;
  }
`;

export const ProductTypeTitle = styled(Title)`
  min-width: 180px;
  margin-bottom: 0 !important;
  font-size: 2.25rem !important;
  padding: 0 24px;
  color: #fff !important;
  font-weight: 400 !important;
`;

interface SelectButtonProps {
  $isActive?: boolean;
}

export const SelectButton = styled(Button)<SelectButtonProps>`
  background-color: ${(props) =>
    props.$isActive ? '#d81616' : '#FFF'} !important;
  font-weight: 600;
  color: ${(props) => (props.$isActive ? '#FFF' : '#d81616')} !important;
  border: ${(props) =>
    props.$isActive ? '1px solid transparent' : '1px solid #d81616'} !important;
  height: 40px;
  border-radius: 4px;
  font-size: 1.2rem;
  padding: 0 1.5rem;

  &.ant-btn:hover {
    background-color: ${(props) =>
      props.$isActive ? '#d81616' : '#FFF'} !important;
    border: 1px solid #d81616 !important;
    box-shadow: 2px 2px 4px #d8161630;
  }
`;
