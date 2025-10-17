'use client';

import CartForm from '@/components/CartForm';
import FullScreenLoading from '@/components/Loadings/FullScreenLoading';
import OrderCompleted from '@/components/OrderCompleted';
import { useAppSelector } from '@/hooks/redux';
import { CartInterface } from '@/interfaces/CartInterface';
import { Order } from '@/interfaces/Order';
import { Flex, Result, Spin } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

type CartStatusType = 'RELEASE' | 'NOT_FOUND' | 'LOADING' | 'ORDER_COMPLETED';

const CartArea = () => {
  const params = useParams();
  const urlCartId = params?.id;
  const router = useRouter();

  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const orderList: Order[] = useAppSelector((state) => state.order.orderList);
  const [cartStatus, setCartStatus] = useState<CartStatusType>('LOADING');
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    if (urlCartId === cart?.id) {
      setCartStatus('RELEASE');
      return;
    }
    if (urlCartId !== cart?.id && cart) {
      setCartStatus('NOT_FOUND');
      return;
    }
    if (!cart && orderList.length && orderCompleted) {
      setCartStatus('ORDER_COMPLETED');
      return;
    }
    if (urlCartId !== cart?.id && !cart && !orderList.length) {
      router.push('/');
    }
    setCartStatus('LOADING');
  }, [cart, urlCartId]);

  return (
    <Suspense fallback={<FullScreenLoading />}>
      {cartStatus === 'RELEASE' ? (
        <Flex
          justify="center"
          style={{ width: '100%', marginTop: '100px', background: '#f7f7f7' }}
        >
          <Flex style={{ width: '100%', maxWidth: '1524px', margin: '12px 0' }}>
            <CartForm
              orderCompleted={orderCompleted}
              onOrderCompleted={setOrderCompleted}
            />
          </Flex>
        </Flex>
      ) : cartStatus === 'NOT_FOUND' ? (
        <Flex
          justify="center"
          align="stretch"
          style={{
            width: '100%',
            padding: '32px 16px',
            marginTop: '100px',
          }}
        >
          <Result
            status="error"
            title="Carrinho não encontrado"
            subTitle="Retorne a página de compras."
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: '#FFF',
              padding: '16px',
              width: '100%',
              maxWidth: '1376px',
              height: '400px',
              borderRadius: '4px',
              boxShadow: '4px 4px 20px #d8161630',
            }}
          />
        </Flex>
      ) : cartStatus === 'ORDER_COMPLETED' ? (
        <OrderCompleted />
      ) : (
        <Flex
          justify="center"
          align="center"
          style={{
            width: '100%',
            height: 'calc(100vh - 100px)',
            marginTop: '100px',
          }}
        >
          <Spin size="large" />
        </Flex>
      )}
    </Suspense>
  );
};

export default CartArea;
