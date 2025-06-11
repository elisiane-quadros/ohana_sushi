import { Product } from '@/interfaces/Product';
import { ProductCardContainerFlex } from './styles';
import Image from 'next/image';
import { Button, Divider, Flex, Popover, Tag, Typography } from 'antd';
import SunFamily from '../SunFamily';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import ChooseButton from '../ChooseButton';
import { CartInterface } from '@/interfaces/CartInterface';
import { useAppSelector } from '@/hooks/redux';
import ButtonLink from '../ButtonLink';
import useResponsive from '@/hooks/useResponsive';
import { useEffect, useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const { Title, Text } = Typography;
  const { isMdDown, isXs } = useResponsive();

  // const [hasProductInCart, setHasProductInCart] = useState<boolean>(false);

  const findProductQuantityInCart = (productId: number) => {
    if (cart) {
      const hasProduct = cart.cartItemList.find((cil) => cil.id === productId);
      if (hasProduct && hasProduct.id) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <ProductCardContainerFlex
      vertical
      justify="space-between"
      style={{
        minHeight: `${isXs ? '168px' : isMdDown ? '210px' : '240px'}`,
        borderRadius: '4px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: findProductQuantityInCart(product.id) ? '#d81616' : '',
        boxShadow: findProductQuantityInCart(product.id)
          ? '2px 2px 8px 1px #d81616aa'
          : 'none',
      }}
    >
      <Flex
        vertical
        style={{
          padding: '8px',
        }}
      >
        <Flex gap={4} align="center" justify="space-between">
          <Title
            level={5}
            style={{
              margin: 0,
              fontSize: `${isMdDown ? '1.2rem' : '1.4rem'}`,
              color: '#d81616',
              fontWeight: 400,
            }}
          >
            {product.title}
          </Title>
          <Tag style={{ marginInlineEnd: '0px' }} color="#000">
            <Text
              style={{
                fontSize: '0.8rem',
                color: '#fff',
                lineHeight: 1.1,
                fontWeight: 600,
              }}
            >
              {product.type === 'COMBO'
                ? `${calculateComboTotalItems(product.ingredientList)} peças`
                : ''}
            </Text>
          </Tag>
        </Flex>
        <Flex gap={8}>
          <Flex>
            <Image
              src={product.image}
              alt="example"
              height={180}
              width={240}
              style={{
                width: `${isMdDown ? '100px' : '160px'}`,
                height: `${isMdDown ? '75px' : '120px'}`,
                background: '#fff',
                borderRadius: '4px',
              }}
            />
          </Flex>
          <Flex vertical gap={2} style={{ width: '100%' }}>
            {product.ingredientList.map((ingredient) => {
              return (
                <Text
                  key={ingredient.id}
                  style={{
                    fontSize: '0.875rem',
                    color: '#000',
                    lineHeight: 1.1,
                  }}
                >
                  {ingredient.quantity} {ingredient.name}
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        style={{
          background: 'linear-gradient(to right, #d81616aa, #d8161633)',
          padding: '8px',
          borderTop: isXs ? 'none' : '1px solid #d9d9d9',
          borderRadius: '0 0 2px 2px',
        }}
      >
        <Title
          level={5}
          style={{
            marginBottom: 0,
            marginTop: 0,
            lineHeight: 1.2,
            color: '#000',
            fontSize: '1.3rem',
            fontFamily: 'var(--inria-sans) !important',
          }}
        >
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)}
        </Title>
        <ChooseButton product={product} sunButton />
      </Flex>
    </ProductCardContainerFlex>
  );
};

export default ProductCard;
