import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { CartQuantityNumber, SeeDetailsButtonContainer } from './styles';
import { mdiCart, mdiCartOutline } from '@mdi/js';
import { CartInterface } from '@/interfaces/CartInterface';
import { Divider, Flex, Popover, Typography } from 'antd';
import { useAppSelector } from '@/hooks/redux';
import Image from 'next/image';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import ButtonPrimary from '../ButtonPrimary';
import ButtonLink from '../ButtonLink';
import Link from 'next/link';
import sumTotalCartItems from '@/utils/sumTotalCartItems';
import ChooseButton from '../ChooseButton';
import useResponsive from '@/hooks/useResponsive';
import InputSendCalculation from '../InputSendCalculation';
import { DeliveryCost } from '@/interfaces/DeliveryCost';
import { useRouter } from 'next/navigation';

interface CartProps {
  isNavigating: boolean;
  setIsNavigating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart = ({ isNavigating, setIsNavigating }: CartProps) => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const selectedNeighborhood: DeliveryCost | null = useAppSelector(
    (state) => state.neighborhood.neighborhood,
  );
  const { Text } = Typography;
  const { isXs } = useResponsive();
  const router = useRouter();

  // const [isNavigating, setIsNavigating] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState<number | null>(null);
  const [openPopover, setOpenPopover] = useState(false);

  const handlePurchase = async () => {
    if (!cart) return;

    setIsNavigating(true);
    setOpenPopover(false); // Fecha o popover imediatamente

    try {
      await router.push(`/carrinho/${cart.id}`);
    } catch (error) {
      console.error('Erro na navegação:', error);
      setIsNavigating(false);
    }
  };

  const content = cart ? (
    <Flex
      vertical
      justify="center"
      style={{ width: isXs ? '320px' : '420px', padding: '0 12px 12px 12px' }}
    >
      <Flex
        vertical
        style={{
          width: '100%',
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <Divider style={{ margin: '8px 0' }} />
        <Flex vertical style={{ width: '100%' }} gap={8}>
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
                    <Text style={{ fontWeight: 600, lineHeight: 1.1 }}>
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
                  <ChooseButton product={item.product} />
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
          <InputSendCalculation label="Selecione o bairro para calcular o valor da entrega." />
          <Flex justify="space-between">
            <Text style={{ fontWeight: 600 }}>Total de itens:</Text>
            <Text>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(cart.value)}
            </Text>
          </Flex>
          {selectedNeighborhood ? (
            <Flex vertical gap={8}>
              <Flex justify="space-between">
                <Text style={{ fontWeight: 600 }}>Valor da entrega:</Text>
                <Text>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(selectedNeighborhood.deliveryCost)}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text style={{ fontWeight: 600 }}>Total da compra:</Text>
                <Text>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(cart.value + selectedNeighborhood.deliveryCost)}
                </Text>
              </Flex>
            </Flex>
          ) : null}
        </Flex>
      </Flex>
      <SeeDetailsButtonContainer>
        <Divider style={{ margin: '8px 0' }} />
        {cart ? (
          // <Link href={`/carrinho/${cart.id}`}>
          <ButtonPrimary
            style={{ width: '100%' }}
            loading={isNavigating}
            onClick={handlePurchase}
          >
            Comprar
          </ButtonPrimary>
        ) : // </Link>
        null}
      </SeeDetailsButtonContainer>
    </Flex>
  ) : null;

  const sumTotal = () => {
    const newTotalCardItems = sumTotalCartItems(cart);
    setTotalCartItems(newTotalCardItems);
    if (newTotalCardItems === 0) {
      setOpenPopover(false);
    }
  };

  useEffect(() => {
    sumTotal();
  }, [cart]);

  return (
    <Popover
      placement="bottomRight"
      title={
        cart && cart?.cartItemList && cart?.cartItemList.length ? (
          <Text
            style={{ fontSize: '1rem', padding: ' 0 12px', lineHeight: 2.25 }}
          >
            Carrinho
          </Text>
        ) : null
      }
      content={
        cart && cart?.cartItemList && cart?.cartItemList.length ? content : null
      }
      open={openPopover}
      trigger="click"
      onOpenChange={(open) => {
        setOpenPopover(open);
      }}
    >
      <Flex
        justify="flex-end"
        align="center"
        gap={12}
        style={{ height: '40px', position: 'relative' }}
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
            cursor: totalCartItems ? 'pointer' : 'default',
          }}
        />
      </Flex>
    </Popover>
  );
};

export default Cart;
