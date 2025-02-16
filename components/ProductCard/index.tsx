'use client';

import Image from 'next/image';

import {
  CardTitle,
  ImageContainer,
  IngredientContainer,
  IngredientItem,
  Price,
  ProductCardContainer,
  TitleContainer,
} from './styles';
import { Product } from '@/interfaces/Product';
import { Divider, Flex } from 'antd';
import ChooseButton from '../ChooseButton';
import { CartInterface } from '@/interfaces/CartInterface';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/redux';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);

  const [productIsInCart, setProductIsInCart] = useState(false);

  const verifyIfProductIsInCart = () => {
    if (cart && cart?.cartItemList) {
      console.log('1');
      const isInCart = !!cart?.cartItemList.find(
        (cartItem) => cartItem.id === product.id,
      );

      setProductIsInCart(isInCart);
    }
  };

  useEffect(() => {
    verifyIfProductIsInCart();
  }, [cart]);

  return (
    <ProductCardContainer>
      <Flex vertical gap={8} style={{ padding: '8px' }}>
        <TitleContainer>
          <CardTitle>{`${product.title} ${product.type === 'COMBO' ? `(${calculateComboTotalItems(product.ingredientList)} peças)` : ''}`}</CardTitle>
          <Divider style={{ margin: '8px 0 0' }} />
        </TitleContainer>
        <ImageContainer>
          <Image src={product.image} alt="example" height={213} width={284} />
        </ImageContainer>
        <Flex vertical>
          {product.ingredientList.map((ing) => {
            return (
              <IngredientContainer key={ing.id}>
                <IngredientItem>
                  <span>{ing.quantity}</span>
                  <span>{ing.name}</span>
                </IngredientItem>
              </IngredientContainer>
            );
          })}
        </Flex>
      </Flex>
      <Flex
        vertical
        style={{
          padding: '0 8px 8px 8px',
          background: `${productIsInCart ? '#d8161620' : 'transparent'}`,
        }}
      >
        <Divider
          style={{
            margin: '0 0 8px 0',
            background: `${productIsInCart ? '#d8161610' : 'transparent'}`,
          }}
        />
        <Flex justify="space-between" align="center">
          <Price>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </Price>
          <ChooseButton product={product} productIsInCart={productIsInCart} />
        </Flex>
      </Flex>
    </ProductCardContainer>
  );
};

export default ProductCard;
