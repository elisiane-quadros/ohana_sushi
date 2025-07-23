import InputSendCalculation from '@/components/InputSendCalculation';
import { useAppSelector } from '@/hooks/redux';
import useResponsive from '@/hooks/useResponsive';
import { CartInterface } from '@/interfaces/CartInterface';
import { DeliveryCost } from '@/interfaces/DeliveryCost';
import { Divider, Flex, Typography } from 'antd';
import { ItemsContainerFlex, SeeDetailsButtonContainer } from './styles';
import ButtonPrimary from '@/components/ButtonPrimary';
import { useRouter } from 'next/navigation';
import ProductInList from '@/components/ProductInList';
interface PopoverContentProps {
  cart: CartInterface;
  isNavigating: boolean;
  onIsNavigating: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenCart: (open: boolean) => void;
}

const PopoverContent = ({
  cart,
  isNavigating,
  onIsNavigating,
  onOpenCart,
}: PopoverContentProps) => {
  const { Text } = Typography;
  const { isXs } = useResponsive();
  const router = useRouter();
  const selectedNeighborhood: DeliveryCost | null = useAppSelector(
    (state) => state.neighborhood.neighborhood,
  );

  const handlePurchase = async () => {
    if (!cart) return;

    onIsNavigating(true);
    onOpenCart(false);

    try {
      await router.push(`/carrinho/${cart.id}`);
    } catch (error) {
      console.error('Erro na navegação:', error);
      onIsNavigating(false);
    }
  };

  return (
    <Flex
      vertical
      justify="center"
      style={{
        width: isXs ? '95vw' : '420px',
        padding: '0 12px 12px 12px',
      }}
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
          <ItemsContainerFlex vertical>
            {cart.cartItemList.map((item) => (
              <ProductInList
                key={item.id}
                item={item}
                onOpenCart={onOpenCart}
                hideSeeCartInProductModal
              />
            ))}
          </ItemsContainerFlex>
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
          <ButtonPrimary
            style={{ width: '100%' }}
            loading={isNavigating}
            onClick={handlePurchase}
          >
            Comprar
          </ButtonPrimary>
        ) : null}
      </SeeDetailsButtonContainer>
    </Flex>
  );
};

export default PopoverContent;
