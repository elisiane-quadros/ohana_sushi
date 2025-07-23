import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonObsStyled = styled(Button)`
  background-color: #fff;
  font-weight: 600;
  color: #333 !important;
  border: 1px solid #d9d9d9 !important;
  height: 28px;
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 6px 24px;
  width: 100%;
  /* margin-right: 24px; */

  &.ant-btn:hover {
    background-color: #e5e5e5 !important;
    border: 1px solid #33333380 !important;
  }
`;
