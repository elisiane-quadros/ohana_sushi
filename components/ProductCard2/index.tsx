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

interface ProductCardProps {
  product: Product;
}

const ProductCard2 = ({ product }: ProductCardProps) => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const { Title, Text } = Typography;
  const { isMdDown, isXs } = useResponsive();

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
    <ProductCardContainerFlex
      vertical
      justify="space-between"
      style={{
        minHeight: `${isXs ? '168px' : isMdDown ? '210px' : '240px'}`,
        borderRadius: '4px',
        borderWidth: findProductQuantityInCart(product.id) ? '1px' : '1px',
        borderStyle: 'solid',
        borderImage: findProductQuantityInCart(product.id)
          ? 'linear-gradient(to right, #d81616aa, #d8161633) 1'
          : 'none',
        boxShadow: findProductQuantityInCart(product.id)
          ? '0 0 0 1px #d81616aa'
          : 'none',
      }}
    >
      <Flex
        vertical
        gap={2}
        style={{
          padding: isXs ? '8px 8px 0 8px' : '8px',
          // background: 'linear-gradient(to right, #d81616aa, #d8161633)',
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
          <Flex vertical gap={3} style={{ width: '100%' }}>
            {product.ingredientList.map((ingredient, index) => {
              if (index < (isXs ? 3 : isMdDown ? 4 : 6)) {
                return (
                  <Text
                    style={{
                      fontSize: '0.875rem',
                      color: '#000',
                      lineHeight: 1.1,
                    }}
                  >
                    {ingredient.quantity} {ingredient.name}
                  </Text>
                );
              }
            })}
            {product.ingredientList.length > (isXs ? 3 : isMdDown ? 4 : 6) && (
              <Popover
                placement="bottom"
                content={
                  <Flex vertical gap={2}>
                    {product.ingredientList.map((ingredient, index) => {
                      if (index >= (isXs ? 3 : isMdDown ? 4 : 6)) {
                        return (
                          <Text
                            style={{
                              fontSize: '0.875rem',
                              color: '#000',
                              lineHeight: 1.1,
                            }}
                          >
                            {ingredient.quantity} {ingredient.name}
                          </Text>
                        );
                      }
                    })}
                  </Flex>
                }
              >
                <ButtonLink isAppLink style={{ lineHeight: 1, paddingLeft: 0 }}>
                  +{' '}
                  {`${product.ingredientList.length - (isXs ? 3 : isMdDown ? 4 : 6)}`}{' '}
                  itens
                </ButtonLink>
              </Popover>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        style={{
          background: 'linear-gradient(to right, #d81616aa, #d8161633)',
          // background: findProductQuantityInCart(product.id)
          //   ? 'linear-gradient(to right, #d81616aa, #d8161633)'
          //   : '',
          // opacity: findProductQuantityInCart(product.id) ? 0.5 : 1,
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

export default ProductCard2;
