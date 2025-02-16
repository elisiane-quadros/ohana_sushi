import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
import { ButtonLinkStyled } from './styles';

interface ButtonLinkProps extends ButtonProps {
  children: ReactNode;
}

const ButtonLink = ({ children, ...props }: ButtonLinkProps) => (
  <ButtonLinkStyled {...props}>{children}</ButtonLinkStyled>
);

export default ButtonLink;
