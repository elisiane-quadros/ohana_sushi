import { ReactNode } from 'react';
import { ButtonProps } from 'antd/lib/button';
import { ButtonLinkStyled } from './styles';

interface ButtonLinkProps extends ButtonProps {
  children: ReactNode;
  isAppLink?: boolean;
}

const ButtonLink = ({
  children,
  isAppLink = false,
  ...props
}: ButtonLinkProps) => (
  <ButtonLinkStyled {...props} $isAppLink={isAppLink}>
    {children}
  </ButtonLinkStyled>
);

export default ButtonLink;
