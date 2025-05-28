import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
import { ButtonPrimaryStyled } from './styles';

interface ButtonPrimaryProps extends ButtonProps {
  children: ReactNode;
  invert?: boolean;
}

const ButtonPrimary = ({
  children,
  invert = false,
  ...props
}: ButtonPrimaryProps) => (
  <ButtonPrimaryStyled {...props} invert>
    {children}
  </ButtonPrimaryStyled>
);

export default ButtonPrimary;
