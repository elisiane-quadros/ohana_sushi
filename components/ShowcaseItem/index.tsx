import React, { memo } from 'react';
import { Col } from 'antd';
import ProductCard from '../ProductCard';
import { Product } from '@/interfaces/Product';

interface ShowcaseItemProps {
  product: Product;
}

const ShowcaseItem = ({ product }: ShowcaseItemProps) => {
  return (
    <Col
      xs={24}
      md={12}
      xl={8}
      xxl={6}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <ProductCard key={product.id} product={product} />
    </Col>
  );
};

export default ShowcaseItem;
