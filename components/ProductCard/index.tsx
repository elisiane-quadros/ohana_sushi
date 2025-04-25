import { Product } from '@/interfaces/Product';
import { ProductCardContainerFlex } from './styles';
import Image from 'next/image';
import { Divider, Flex, Typography } from 'antd';
import SunFamily from '../SunFamily';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import ChooseButton from '../ChooseButton';
import { CartInterface } from '@/interfaces/CartInterface';
import { useAppSelector } from '@/hooks/redux';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);

  const { Title, Text } = Typography;

  const findProductQuantityInCart = (productId: number) => {
    if (cart) {
      const product = cart.cartItemList.find((cil) => cil.id === productId);
      if (product) {
        return product.quantity;
      }
      return 0;
    }
    return 0;
  };

  return (
    <ProductCardContainerFlex vertical justify="space-between">
      <Flex vertical style={{ width: '100%' }}>
        <Flex
          style={{ width: '100%', padding: '8px', background: '#d8161620' }}
          justify="space-between"
          align="center"
        >
          <Title level={5} style={{ margin: 0, fontSize: '16px' }}>
            {product.title}
          </Title>
          {/* <SunFamily /> */}
        </Flex>
        <Flex vertical gap={8} style={{ width: '100%', padding: '0 8px' }}>
          <Flex align="center" justify="center" style={{ width: '100%' }}>
            <Image
              src={product.image}
              alt="example"
              height={180} // {229.5} // {191.7} // 213
              width={240} // {306} // {255.6} // 284
            />
          </Flex>
          <Divider style={{ margin: 0 }} />
          <Text
            style={{
              fontSize: '0.8rem',
              color: '#d81616',
              lineHeight: 1.1,
              fontWeight: 600,
            }}
          >
            {product.type === 'COMBO'
              ? `${calculateComboTotalItems(product.ingredientList)} peças`
              : ''}
          </Text>
          <Flex vertical gap={4}>
            {product.ingredientList.map((ingredient) => (
              <Text
                style={{
                  fontSize: '0.8rem',
                  color: '#000',
                  lineHeight: 1.1,
                }}
              >
                {ingredient.quantity} {ingredient.name}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="space-between"
        align="flex-end"
        style={{
          background: findProductQuantityInCart(product.id) ? '#d8161620' : '',
          padding: '8px',
          borderTop: '1px solid #d9d9d9',
        }}
      >
        <Flex vertical>
          <Text
            style={{
              lineHeight: 1,
              color: '#000',
              fontWeight: 600,
              fontSize: '0.8rem',
            }}
          >
            unidade
          </Text>
          <Title
            level={5}
            style={{
              marginBottom: 0,
              marginTop: 0,
              lineHeight: 1.2,
              color: '#d81616',
              height: '24px',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </Title>
        </Flex>
        <Flex vertical align="flex-end" gap={6}>
          {/* {findProductQuantityInCart(product.id) ? (
            <Flex vertical gap={2}>
              <Text
                style={{
                  lineHeight: 1,
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textAlign: 'end',
                }}
              >
                adicionado
              </Text>
              <Text
                style={{
                  lineHeight: 1,
                  color: '#d81616',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textAlign: 'end',
                }}
              >
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(
                  product.price * findProductQuantityInCart(product.id),
                )}
              </Text>
            </Flex>
          ) : null} */}
          <ChooseButton product={product} />
        </Flex>
      </Flex>
    </ProductCardContainerFlex>
  );
};

export default ProductCard;
