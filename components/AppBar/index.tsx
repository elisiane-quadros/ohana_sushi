'use client';

import { AppBarArea, AppBarContainer, HomeButton } from './styles';
import logo from '../../public/images/logoBig2.png';
import Image from 'next/image';
import Cart from '../Cart';
import { Button, Flex } from 'antd';
import ButtonLink from '../ButtonLink';
import Icon from '@mdi/react';
import { mdiInstagram, mdiWhatsapp } from '@mdi/js';
import useResponsive from '@/hooks/useResponsive';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { setShowCart } from '@/store/features/cart';
import Link from 'next/link';

const AppBar = () => {
  const { isXs } = useResponsive();
  const showCart: boolean = useAppSelector((state) => state.cart.showCart);
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newShowCart: boolean = pathname === '/';
    dispatch(setShowCart(newShowCart));
  }, [pathname, dispatch]);

  return (
    <AppBarContainer>
      <AppBarArea>
        <Flex align="center" gap={24}>
          <Link href={'/'}>
            <HomeButton>
              <Image src={logo} width={80} height={66.03} alt="Ohana Sushi" />
            </HomeButton>
          </Link>
          <Flex align="center" gap={isXs ? 4 : 16}>
            <ButtonLink
              icon={<Icon path={mdiWhatsapp} size={1.2} />}
              style={{ fontWeight: 600, fontSize: '16px' }}
            >
              <a
                href="https://wa.me/5551996090597?text=Olá,%20estou%20vindo%20do%20www.ohanasushi.com.br%20e%20quero%20fazer%20um%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {isXs ? '' : '(51) 99609-0597'}
              </a>
            </ButtonLink>
            <ButtonLink
              icon={<Icon path={mdiInstagram} size={1.2} />}
              style={{ fontWeight: 600, fontSize: '16px' }}
            >
              <a
                href="https://www.instagram.com/ohanasushi_delivery"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                {isXs ? '' : 'ohanasushi_delivery'}
              </a>
            </ButtonLink>
          </Flex>
        </Flex>
        {showCart ? <Cart /> : null}
      </AppBarArea>
    </AppBarContainer>
  );
};

export default AppBar;
