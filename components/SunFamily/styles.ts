import { Flex } from 'antd';
import styled from 'styled-components';

interface ScreenWidth {
  isMdDown: boolean;
  isXs?: boolean;
}

export const SunImageFlex = styled(Flex)<ScreenWidth>`
  position: relative;
  top: 8px;
`;

export const FamilyImageFlex = styled(Flex)<ScreenWidth>`
  position: relative;
  top: -15px;
`;
