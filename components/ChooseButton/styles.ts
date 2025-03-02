import { Button, Input } from 'antd';
import styled from 'styled-components';

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
  background-color: #fff; // #333;
  border-radius: 4px 0 0 4px;
  padding: 4px 8px;
  border: 1px solid #d9d9d9;
  width: 32px;
  height: 24px;

  &:hover {
    background-color: #33333340 !important;
    border-color: #333333dd !important;
  }
`;

export const SubtractButton2 = styled.button`
  position: relative;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 35%,
      #d8161680 50%,
      transparent 65%,
      transparent 100%
    );
  }

  &:active {
    transform: scale(0.9);
    opacity: 0.8;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  span {
    position: absolute;
    top: 45%;
    left: 44%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
  }
`;

export const QuantityInput = styled(Input)`
  height: 24px;
  width: 36px;
  border-radius: 0;
  border: none;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  line-height: 1;

  &:hover {
    border-color: #333333dd !important;
  }
`;

export const QuantityInput2 = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 32px;
  border: none;
  outline: none;
  text-align: center;
  font-weight: 700;

  /* Remove Arrows/Spinners */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

interface isInCartProps {
  $isInCart: boolean;
}

export const AddButton = styled(Button)<isInCartProps>`
  background-color: #fff;
  border-radius: ${(props) => (props.$isInCart ? '0 6px 6px 0' : '6px')};
  padding: 4px 8px;
  border: 1px solid #d9d9d9;
  width: 34px;
  height: 24px;

  &:hover {
    background-color: #33333340 !important;
    border-color: #333333dd !important;
  }
`;

export const AddButton2 = styled.button`
  position: relative;
  width: 30px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -2px;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 35%,
      #d8161680 50%,
      transparent 65%,
      transparent 100%
    );
  }

  &:active {
    transform: scale(0.9);
    opacity: 0.8;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
  }

  span {
    position: absolute;
    top: 42%;
    left: 47%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
  }
`;
