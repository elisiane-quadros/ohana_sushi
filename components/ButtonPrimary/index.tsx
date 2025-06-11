import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
import { ButtonPrimaryStyled } from './styles';

interface ButtonPrimaryProps extends ButtonProps {
  children: ReactNode;
}

const ButtonPrimary = ({ children, ...props }: ButtonPrimaryProps) => (
  <ButtonPrimaryStyled {...props}>{children}</ButtonPrimaryStyled>
);

export default ButtonPrimary;
