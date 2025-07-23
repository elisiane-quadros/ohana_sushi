import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
import { ButtonObsStyled } from './styles';

interface ButtonObsProps extends ButtonProps {
  children: ReactNode;
}

const ButtonObs = ({ children, ...props }: ButtonObsProps) => (
  <ButtonObsStyled {...props}>{children}</ButtonObsStyled>
);

export default ButtonObs;
