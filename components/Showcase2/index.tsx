import { Card, Collapse, Flex, Typography } from 'antd';
import { useEffect, useState } from 'react';
import productList from './productList';
import { Product } from '@/interfaces/Product';
import { CategoryCard } from './styles';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import Image from 'next/image';
import ChooseButton from '../ChooseButton';

// 'COMBO' | 'PORTION' | 'ITEM' | 'DRINK' | 'OTHER'

interface ProductListByType {
  id: number;
  typeName: string;
  productLists: Product[];
  order: number;
}

const Showcase2 = () => {
  const { Title, Text } = Typography;

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

  useEffect(() => {
    if (productList.length) filterProductsByType();
  }, [productList]);

  console.log(productListByType);

  return (
    <Flex vertical align="center" gap={16} style={{ padding: '16px' }}>
      {productListByType.map((productByType) => (
        <Collapse
          key={productByType.id}
          bordered={false}
          defaultActiveKey={['1']}
          style={{ width: '1374px', background: '#FFF' }}
          // expandIcon={({ isActive }) => (
          //   <CaretRightOutlined rotate={isActive ? 90 : 0} />
          // )}
          // style={{ background: token.colorBgContainer }}
          items={[
            {
              key: '1',
              label: <span>{productByType.typeName}</span>,
              children: (
                <Flex gap={16} justify="space-between">
                  {productByType.productLists.map((product: Product) => (
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
                        {product.ingredientList.map((ingredient) => (
                          <Text
                            key={ingredient.id}
                            style={{
                              lineHeight: 1.2,
                              color: '#555',
                              fontSize: '0.8rem',
                            }}
                          >{`${ingredient.quantity.toString().padStart(2, '0')} ${ingredient.name}`}</Text>
                        ))}
                      </Flex>
                      <Flex justify="space-between">
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
                        {/* <ChooseButton /> */}
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
