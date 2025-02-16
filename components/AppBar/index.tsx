'use client';

import { AppBarArea, AppBarContainer } from './styles';
import logo from '../../public/images/logoBig2.png';
import Image from 'next/image';
import Cart from '../Cart';
import { Flex } from 'antd';
import ButtonLink from '../ButtonLink';
import Icon from '@mdi/react';
import { mdiInstagram, mdiWhatsapp } from '@mdi/js';
import useResponsive from '@/hooks/useResponsive';

const AppBar = () => {
  const { isXs } = useResponsive();

  return (
    <AppBarContainer>
      <AppBarArea>
        <Flex align="center" gap={24}>
          <Image src={logo} width={80} height={66.03} alt="Ohana Sushi" />
          <Flex align="center" gap={isXs ? 4 : 16}>
            <ButtonLink
              icon={<Icon path={mdiWhatsapp} size={1.2} />}
              style={{ fontWeight: 600, fontSize: '16px' }}
            >
              {isXs ? '' : '(51) 99825-1670'}
            </ButtonLink>
            <ButtonLink
              icon={<Icon path={mdiInstagram} size={1.2} />}
              style={{ fontWeight: 600, fontSize: '16px' }}
            >
              {isXs ? '' : 'ohanasushi_delivery'}
            </ButtonLink>
          </Flex>
        </Flex>
        <Cart />
      </AppBarArea>
    </AppBarContainer>
  );
};

export default AppBar;
