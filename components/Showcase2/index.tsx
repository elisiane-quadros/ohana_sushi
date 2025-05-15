import { Carousel, Col, Flex, Radio, RadioChangeEvent, Row } from 'antd';
import {
  ProductTypeTitle,
  ProductTypeTitleFlex,
  SearchAnFilterFlex,
  ShowcaseContainerFlex,
  ShowCaseFlex,
} from './styles';

import './styles.css';
import Icon from '@mdi/react';
import { mdiCartOutline, mdiMagnify } from '@mdi/js';
import InputForm from '../InputForm';
import { Product } from '@/interfaces/Product';
import { ChangeEvent, useEffect, useState } from 'react';
import productList from './productList';
import ProductCard2 from '../ProductCard2';
import useResponsive from '@/hooks/useResponsive';
import Cart from '../Cart';
import Link from 'next/link';
import ButtonPrimary from '../ButtonPrimary';
import { CartInterface } from '@/interfaces/CartInterface';
import { useAppSelector } from '@/hooks/redux';

interface ProductListByType {
  id: number;
  type: ProductType;
  typeName: string;
  productLists: Product[];
  order: number;
}

const Showcase2 = () => {
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);

  const { isLgDown, isXs, isLg } = useResponsive();
  const [productListByType, setProductListByType] = useState<
    ProductListByType[]
  >([]);
  const [productListByTypeFiltered, setProductListByTypeFiltered] = useState<
    ProductListByType[]
  >([]);
  // const [isSticky, setIsSticky] = useState(false);
  const [selectedProductType, setSelectedProductType] = useState('COMBO');

  const radioButtonStyle = { fontSize: '1.2rem' };

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
          {
            id: 1,
            type: 'COMBO',
            typeName: 'Combos',
            productLists: newComboList,
            order: 1,
          },
        ];
      if (newPortionList.length)
        newProductListByType = [
          ...newProductListByType,
          {
            id: 2,
            type: 'PORTION',
            typeName: 'Porções',
            productLists: newPortionList,
            order: 2,
          },
        ];
      if (newItemList.length)
        newProductListByType = [
          ...newProductListByType,
          {
            id: 3,
            type: 'ITEM',
            typeName: 'Unidades',
            productLists: newItemList,
            order: 3,
          },
        ];
      if (newDrinkList.length)
        newProductListByType = [
          ...newProductListByType,
          {
            id: 4,
            type: 'DRINK',
            typeName: 'Bebidas',
            productLists: newDrinkList,
            order: 4,
          },
        ];
      if (newOtherList.length)
        newProductListByType = [
          ...newProductListByType,
          {
            id: 5,
            type: 'OTHER',
            typeName: 'Outros',
            productLists: newOtherList,
            order: 5,
          },
        ];

      newProductListByType.sort((a, b) => a.order - b.order);

      setProductListByType(newProductListByType);
      setProductListByTypeFiltered(newProductListByType);
    });
  };

  const handleProductType = (e: RadioChangeEvent) => {
    setSelectedProductType(e.target.value);

    // Find the element with the selected type ID and scroll to it
    const element = document.getElementById(e.target.value);
    if (element) {
      const offset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue);
    const filteredProductListByType = productListByType.map((productType) => {
      const filteredProducts = productType.productLists.filter(
        (product) =>
          product.title.toLowerCase().includes(searchValue) ||
          product.ingredientList.some((ingredient) =>
            ingredient.name.toLowerCase().includes(searchValue),
          ),
      );
      console.log(filteredProducts);
      return { ...productType, productLists: filteredProducts };
    });
    setProductListByTypeFiltered(filteredProductListByType);
  };

  useEffect(() => {
    if (productList.length) filterProductsByType();
  }, [productList]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Triggers closer to the top of viewport
      threshold: [0, 0.2, 0.5, 0.8, 1], // Multiple thresholds for smoother detection
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Get the most visible section
      const mostVisible = entries.reduce((prev, current) => {
        return prev && prev.intersectionRatio > current.intersectionRatio
          ? prev
          : current;
      });

      if (mostVisible && mostVisible.isIntersecting) {
        const productType = mostVisible.target.id;
        setSelectedProductType(productType);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all product type sections
    productListByType.forEach((productType) => {
      const element = document.getElementById(productType.type);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      productListByType.forEach((productType) => {
        const element = document.getElementById(productType.type);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [productListByType]);

  console.log(productListByTypeFiltered);

  return (
    <ShowcaseContainerFlex vertical align="center">
      <Flex
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          background: 'rgba(0, 0, 0, 0.85)',
          boxShadow: '1.5px 1.5px 4px #d8161620 !important',
          zIndex: 1000,
          backdropFilter: 'blur(8px)',
        }}
        justify="center"
        align="center"
      >
        <SearchAnFilterFlex align="center" className="show-case-flex">
          <Row gutter={isXs ? [12, 12] : [16, 16]} style={{ width: '100%' }}>
            <Col xs={24} lg={12} xl={6} order={1}>
              <InputForm
                placeholder="Buscar"
                suffix={<Icon path={mdiMagnify} size={1} color="#d81616" />}
                redStyled
                onChange={handleSearch}
                allowClear
              />
            </Col>
            <Col xs={24} lg={24} xl={12} order={isLg ? 3 : 2}>
              <Radio.Group
                value={selectedProductType}
                className="filter-button"
                onChange={handleProductType}
              >
                <Radio.Button value="COMBO" style={radioButtonStyle}>
                  Combos
                </Radio.Button>
                <Radio.Button value="PORTION" style={radioButtonStyle}>
                  Porções
                </Radio.Button>
                <Radio.Button value="DRINK  " style={radioButtonStyle}>
                  Bebidas
                </Radio.Button>
              </Radio.Group>
            </Col>
            <Col xs={24} lg={12} xl={6} order={isLg ? 2 : 3}>
              <Flex
                justify="end"
                align="center"
                style={{ width: '100%' }}
                gap={16}
              >
                <Cart />
              </Flex>
            </Col>
          </Row>
        </SearchAnFilterFlex>
      </Flex>
      <ShowCaseFlex className="show-case-flex" vertical gap={32}>
        {productListByTypeFiltered.map((productByType) => (
          <Flex vertical gap={16} key={productByType.id}>
            {productByType.productLists.length ? (
              <ProductTypeTitleFlex id={productByType.type}>
                <ProductTypeTitle level={2}>
                  {productByType.typeName}
                </ProductTypeTitle>
              </ProductTypeTitleFlex>
            ) : null}

            <Carousel
              arrows={
                isXs
                  ? productByType.productLists.length > 3
                  : isLgDown
                    ? productByType.productLists.length > 4
                    : productByType.productLists.length > 6
              }
              dots={
                isXs
                  ? productByType.productLists.length > 3
                  : isLgDown
                    ? productByType.productLists.length > 4
                    : productByType.productLists.length > 6
              }
              // dotPosition={isXs ? 'left' : 'bottom'}
              draggable={isLgDown}
              infinite={false}
              className="showcase-carousel"
            >
              {/* Group products into chunks of 6 */}
              {Array.from({
                length: Math.ceil(
                  isXs
                    ? productByType.productLists.length / 3
                    : isLgDown
                      ? productByType.productLists.length / 4
                      : productByType.productLists.length / 6,
                ),
              }).map((_, index) => {
                const start = isXs
                  ? index * 3
                  : isLgDown
                    ? index * 4
                    : index * 6;
                const productsChunk = productByType.productLists.slice(
                  start,
                  isXs ? start + 3 : isLgDown ? start + 4 : start + 6,
                );

                return (
                  <div key={index}>
                    <Row
                      gutter={isXs ? [0, 8] : [16, 16]}
                      style={{
                        width: '100%',
                        padding: isXs ? '0 36px 48px 36px' : '0 48px 48px',
                      }}
                    >
                      {productsChunk.map((product) => (
                        <Col
                          xl={8}
                          lg={12}
                          md={12}
                          xs={24}
                          key={product.id}
                          style={{ display: 'flex' }}
                        >
                          <ProductCard2 product={product} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                );
              })}
            </Carousel>
          </Flex>
        ))}
      </ShowCaseFlex>
    </ShowcaseContainerFlex>
  );
};

export default Showcase2;
