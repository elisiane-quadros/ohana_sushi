import { Flex } from 'antd';
import { ButtonSunStyled, IconImageFlex, SunImageFlex } from './styles';
import Image from 'next/image';
import sun from '../../public/images/sun2.png';
import { ReactNode } from 'react';

interface ButtonSunProps {
  onClick?: () => void;
  icon?: ReactNode;
}

const ButtonSun = ({ onClick, icon }: ButtonSunProps) => {
  return (
    <ButtonSunStyled onClick={onClick}>
      <Flex vertical align="center" justify="center" style={{ height: '28px' }}>
        <SunImageFlex align="center">
          <Image src={sun} width={28} height={28} alt="Ohana Sushi" />
        </SunImageFlex>
        <IconImageFlex align="center">{icon}</IconImageFlex>
      </Flex>
    </ButtonSunStyled>
  );
};

export default ButtonSun;
