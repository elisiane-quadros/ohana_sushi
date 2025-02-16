'use client';

import { ShowcaseContainer } from './styles';
import { Row } from 'antd';
import useResponsive from '@/hooks/useResponsive';
import productList from './productList';
import ShowcaseItem from '../ShowcaseItem';

const Showcase = () => {
  const { isXxl, isXl, isLg, isMd } = useResponsive();

  return (
    <ShowcaseContainer>
      <Row
        gutter={[16, 16]}
        style={{
          width: `${isXxl ? '1264px' : isXl ? '948px' : isMd || isLg ? '632px' : '316px'}`,
        }}
      >
        {productList.map((prod) => (
          <ShowcaseItem key={prod.id} product={prod} />
        ))}
      </Row>
    </ShowcaseContainer>
  );
};

export default Showcase;
