import { Button, Input } from 'antd';
import styled from 'styled-components';
import ButtonSun from '../ButtonSun';

export const ChooseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

export const ControllersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputTopBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    transparent 30%,
    #d8161680 50%,
    transparent 70%,
    transparent 100%
  );
`;

export const InputBottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    transparent 30%,
    #d8161680 50%,
    transparent 70%,
    transparent 100%
  );
`;

export const SubtractButton = styled(Button)`
  background-color: #d81616;
  border-radius: 0;
  padding: 4px 8px;
  border: 1px solid #d9d9d9;
  width: 36px;
  height: 28px;

  &:hover {
    background-color: #d81616cc !important;
    border-color: #d81616dd !important;
  }
`;

export const QuantityInput = styled(Input)`
  width: 36px;
  height: 28px;
  border-radius: 0;
  border: none;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  line-height: 1;
`;

// interface isInCartProps {
//   $isInCart: boolean;
// }

// export const AddButton2 = styled(ButtonSun)`
//   background-color: transparent;
//   border: none;
// `;

// export const AddButton = styled(Button)<isInCartProps>`
//   background-color: #d81616;
//   color: #fff;
//   border-radius: 0;
//   box-shadow: 2px 2px 4px #d8161620;
//   padding: 4px 8px;
//   border: 1px solid #d9d9d9;
//   width: 36px;
//   height: 28px;

//   &:hover {
//     background-color: #d81616cc !important;
//     border-color: #d81616dd !important;
//   }
/* ` */
