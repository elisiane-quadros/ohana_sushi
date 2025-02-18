import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import {
  CartContainer,
  CartContent,
  CartQuantityNumber,
  CartStyled,
  SeeDetailsButtonContainer,
} from './styles';
import { mdiCart, mdiCartOutline } from '@mdi/js';
import { CartInterface } from '@/interfaces/CartInterface';
import { Divider, Flex, Typography } from 'antd';
import { useAppSelector } from '@/hooks/redux';
import Image from 'next/image';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import ButtonPrimary from '../ButtonPrimary';
import ButtonLink from '../ButtonLink';
import Link from 'next/link';

export const Cart = () => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const { Text } = Typography;

  const [totalCartItems, setTotalCartItems] = useState<number | null>(null);
  const [expandCart, setExpandCart] = useState(false);

  const sumTotalCartItems = () => {
    if (cart && cart?.cartItemList) {
      let newTotalCartItems: number = 0;
      cart?.cartItemList.map((item) => {
        newTotalCartItems += item.quantity;
      });
      setTotalCartItems(newTotalCartItems === 0 ? null : newTotalCartItems);

      if (!cart?.cartItemList.length) {
        setExpandCart(false);
      }
    }
  };

  const handleExpandCart = () => {
    setExpandCart(!expandCart);
  };

  useEffect(() => {
    sumTotalCartItems();
  }, [cart]);

  return (
    <CartContainer>
      <CartStyled
        $hasItems={!!cart?.cartItemList.length}
        $seeDetail={expandCart}
      >
        <Flex
          justify="flex-end"
          align="center"
          style={{
            minHeight: '36px',
            position: 'absolute',
            top: '6px',
            right: '4px',
          }}
        >
          {totalCartItems ? (
            <CartQuantityNumber>
              <span>{totalCartItems}</span>
            </CartQuantityNumber>
          ) : null}
          <Icon
            path={
              cart && cart?.cartItemList && cart?.cartItemList.length
                ? mdiCart
                : mdiCartOutline
            }
            size={1.5}
            style={{
              color: '#d81616',
            }}
          />
        </Flex>
        {cart && cart?.cartItemList && cart?.cartItemList.length ? (
          <Flex vertical justify="center" style={{ width: '100%' }}>
            <CartContent $isExpanded={expandCart}>
              {expandCart ? (
                <Flex
                  vertical
                  style={{
                    width: '100%',
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: expandCart ? 1 : 0,
                    marginTop: '36px',
                  }}
                >
                  <Divider style={{ margin: '8px 0' }} />
                  <Flex vertical style={{ width: '100%' }}>
                    {cart.cartItemList.map((item) => {
                      return (
                        <Flex
                          style={{ width: '100%', padding: '4px 0' }}
                          justify="space-between"
                          gap={4}
                          key={item.id}
                        >
                          <Flex style={{ width: '100%' }} gap={4}>
                            <Image
                              src={item.product.image}
                              alt="example"
                              height={31.95}
                              width={42.6}
                            />
                            <Flex vertical style={{ width: '100%' }}>
                              <Text
                                style={{ fontWeight: 600, lineHeight: 1.1 }}
                              >
                                {item.product.title}
                              </Text>
                              {item.product.type !== 'COMBO' ? (
                                <Text
                                  style={{
                                    lineHeight: 1.1,
                                    fontSize: '12.8px',
                                  }}
                                >
                                  {`${calculateComboTotalItems(item.product.ingredientList)} peças`}{' '}
                                  -{' '}
                                  {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                  }).format(item.product.price)}
                                </Text>
                              ) : (
                                <Text
                                  style={{
                                    lineHeight: 1.1,
                                    fontSize: '12.8px',
                                  }}
                                >
                                  {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                  }).format(item.product.price)}
                                </Text>
                              )}
                            </Flex>
                          </Flex>
                          <Flex justify="flex-end" align="center" gap={4}>
                            <Text
                              style={{ width: '36px', textAlign: 'center' }}
                            >
                              {item.quantity}
                            </Text>
                            <Text style={{ width: '80px', textAlign: 'end' }}>
                              {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                              }).format(item.product.price * item.quantity)}
                            </Text>
                          </Flex>
                        </Flex>
                      );
                    })}
                    <Divider style={{ margin: '8px 0' }} />
                    <Flex gap={4} justify="flex-end">
                      <Flex vertical style={{ width: '36px' }}>
                        <Text
                          strong
                          style={{ textAlign: 'center', lineHeight: 1.3 }}
                        >
                          Items
                        </Text>
                        <Text style={{ textAlign: 'center', lineHeight: 1.3 }}>
                          {totalCartItems}
                        </Text>
                      </Flex>
                      <Flex vertical style={{ width: '80px' }}>
                        <Text
                          strong
                          style={{ textAlign: 'end', lineHeight: 1.3 }}
                        >
                          Total
                        </Text>
                        <Text style={{ textAlign: 'end', lineHeight: 1.3 }}>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(cart.value)}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              ) : null}
            </CartContent>
            <SeeDetailsButtonContainer>
              <Divider style={{ margin: '8px 0' }} />
              {cart ? (
                <Link href={`/carrinho/${cart.id}`}>
                  <ButtonPrimary style={{ width: '100%' }}>
                    Comprar
                  </ButtonPrimary>
                </Link>
              ) : null}
              <ButtonLink type="link" onClick={handleExpandCart}>
                {expandCart ? 'ocultar detalhes' : 'ver detalhes'}
              </ButtonLink>
            </SeeDetailsButtonContainer>
          </Flex>
        ) : null}
      </CartStyled>
    </CartContainer>
  );
};

export default Cart;
