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

export const SubtractButton = styled.button`
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

export const QuantityInput = styled.input`
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

export const AddButton = styled.button`
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
