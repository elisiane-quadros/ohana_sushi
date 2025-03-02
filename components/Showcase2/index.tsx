import { Collapse, Flex, Typography } from 'antd';
import { useEffect, useState } from 'react';
import productList from './productList';
import { Product } from '@/interfaces/Product';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import Image from 'next/image';
import ChooseButton from '../ChooseButton';
import { CartInterface } from '@/interfaces/CartInterface';
import { useAppSelector } from '@/hooks/redux';
import { Ingredient } from '@/interfaces/Ingredient';

// 'COMBO' | 'PORTION' | 'ITEM' | 'DRINK' | 'OTHER'

interface ProductListByType {
  id: number;
  typeName: string;
  productLists: Product[];
  order: number;
}

const Showcase2 = () => {
  const { Title, Text } = Typography;
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);

  const [productIsInCart, setProductIsInCart] = useState(false);
  const [productListByType, setProductListByType] = useState<
    ProductListByType[]
  >([]);

  const filterProductsByType = () => {
    let newComboList: Product[] = [];
    let newPortionList: Product[] = [];
    let newItemList: Product[] = [];
    let newDrinkList: Product[] = [];
    let newOtherList: Product[] = [];

    productList.map((prod) => {
      switch (prod.type) {
        case 'COMBO':
          newComboList = [...newComboList, prod];
          break;
        case 'PORTION':
          newPortionList = [...newPortionList, prod];
          break;
        case 'ITEM':
          newItemList = [...newItemList, prod];
          break;
        case 'DRINK':
          newDrinkList = [...newDrinkList, prod];
          break;
        case 'OTHER':
          newOtherList = [...newOtherList, prod];
          break;
        default:
          break;
      }

      let newProductListByType: ProductListByType[] = [];
      if (newComboList.length)
        newProductListByType = [
          { id: 1, typeName: 'Combos', productLists: newComboList, order: 1 },
        ];
      if (newPortionList.length)
        newProductListByType = [
          ...newProductListByType,
          {
            id: 2,
            typeName: 'Porções',
            productLists: newPortionList,
            order: 2,
          },
        ];
      if (newItemList.length)
        newProductListByType = [
          ...newProductListByType,
          { id: 3, typeName: 'Unidades', productLists: newItemList, order: 3 },
        ];
      if (newDrinkList.length)
        newProductListByType = [
          ...newProductListByType,
          { id: 4, typeName: 'Bebidas', productLists: newDrinkList, order: 4 },
        ];
      if (newOtherList.length)
        newProductListByType = [
          ...newProductListByType,
          { id: 5, typeName: 'Outros', productLists: newOtherList, order: 5 },
        ];

      newProductListByType.sort((a, b) => a.order - b.order);

      setProductListByType(newProductListByType);
    });
  };

  const mountIngredientTextList = (ingredientList: Ingredient[]) => {
    let ingredientTextList = '';
    ingredientList.map((ingredient, index: number) => {
      let separator = index === ingredientList.length - 1 ? '.' : ', ';
      ingredientTextList += `${ingredient.quantity} ${ingredient.name}${separator}`;
    });
    return ingredientTextList;
  };

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

  useEffect(() => {
    if (productList.length) filterProductsByType();
  }, [productList]);

  console.log(productListByType);

  console.log(cart);

  return (
    <Flex vertical align="center" gap={16} style={{ padding: '16px' }}>
      {productListByType.map((productByType) => (
        <Collapse
          key={productByType.id}
          bordered={false}
          defaultActiveKey={['1']}
          style={{ width: '1448px', background: 'transparent' }}
          items={[
            {
              key: '1',
              label: <span>{productByType.typeName}</span>,
              children: (
                <Flex
                  gap={4}
                  justify="space-evenly"
                  align="stretch"
                  style={{ wordWrap: 'break-word', flexWrap: 'wrap' }}
                >
                  {productByType.productLists.map((product: Product) => (
                    <Flex
                      vertical
                      justify="space-between"
                      gap={12}
                      key={product.id}
                      style={{
                        background: '#FFF',
                        padding: '12px',
                        width: '280px',
                      }}
                    >
                      <Flex vertical gap={8}>
                        <Flex vertical>
                          <Title
                            level={5}
                            style={{ marginBottom: 0, lineHeight: 1.2 }}
                          >
                            {product.title}
                          </Title>
                          <Text
                            style={{
                              fontSize: '0.8rem',
                              color: '#555',
                              lineHeight: 1.1,
                            }}
                          >
                            {product.type === 'COMBO'
                              ? `${calculateComboTotalItems(product.ingredientList)} peças`
                              : ''}
                          </Text>
                        </Flex>
                        <Image
                          src={product.image}
                          alt="example"
                          height={191.7} // 213
                          width={255.6} // 284
                        />
                        <Flex vertical>
                          <Text
                            style={{
                              lineHeight: 1.2,
                              color: '#333333aa',
                              fontSize: '0.8rem',
                            }}
                          >
                            {mountIngredientTextList(product.ingredientList)}
                            {/* 10 hot camarão empanado, 10 hot alho poró, 10 hot
                            cove, 10 hot doritos, 10 hot cheddar, 10 hot geleia
                            de pimenta, 10 hot saladi. */}
                          </Text>
                          {/* {product.ingredientList.map((ingredient) => (
                            <Text
                              key={ingredient.id}
                              style={{
                                lineHeight: 1.2,
                                color: '#555',
                                fontSize: '0.8rem',
                              }}
                            >{`${ingredient.quantity.toString().padStart(2, '0')} ${ingredient.name}`}</Text>
                          ))} */}
                        </Flex>
                      </Flex>
                      <Flex
                        justify="space-between"
                        align="flex-end"
                        style={{ height: '58px' }}
                      >
                        <Flex vertical>
                          <Text
                            style={{
                              lineHeight: 1,
                              color: '#555',
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
                            }}
                          >
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(product.price)}
                          </Title>
                        </Flex>
                        <Flex vertical align="flex-end" gap={6}>
                          {findProductQuantityInCart(product.id) ? (
                            <Flex vertical gap={2}>
                              <Text
                                style={{
                                  lineHeight: 1,
                                  color: '#555',
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
                                  color: '#333',
                                  fontWeight: 600,
                                  fontSize: '0.8rem',
                                  textAlign: 'end',
                                }}
                              >
                                {new Intl.NumberFormat('pt-BR', {
                                  style: 'currency',
                                  currency: 'BRL',
                                }).format(
                                  product.price *
                                    findProductQuantityInCart(product.id),
                                )}
                              </Text>
                            </Flex>
                          ) : null}

                          <ChooseButton
                            product={product}
                            productIsInCart={productIsInCart}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              ),
            },
            // {
            //   key: '2',
            //   label: <span>{productByType.typeName}</span>,
            //   children: <span>Combo 2</span>,
            // },
          ]}
        />
      ))}
    </Flex>
  );
};

export default Showcase2;
