import { Flex, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const ShowcaseContainerFlex = styled(Flex)`
  background: #fff;
  min-height: calc(100vh - 500px);
  width: 100%;
`;

export const ShowCaseFlex = styled(Flex)`
  width: 100%;
  /* max-width: 1376px; */
  max-width: 1472px;
  padding: 32px 8px;
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
