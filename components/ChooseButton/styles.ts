import { Button } from 'antd';
import styled from 'styled-components';

export const DefaultButton = styled(Button)`
  background-color: #262626;
  border-radius: 4px;
  padding: 4px 8px;
  width: 28px;
  height: 22px;

  &:hover {
    background-color: #d81616 !important;
    border-color: #d81616 !important;
  }
`;
