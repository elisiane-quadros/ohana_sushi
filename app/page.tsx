'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Flex } from 'antd';
import { useAppDispatch } from '@/hooks/redux';
import { setShowCart } from '@/store/features/cart';
import FullScreenLoading from '@/components/Loadings/FullScreenLoading';

// Lazy load apenas do componente principal
const LazyShowcase = lazy(() => import('@/components/Showcase'));
const LazyHeader = lazy(() => import('@/components/Header'));
const LazyMaintenanceStatus = lazy(
  () => import('@/components/MaintenanceStatus'),
);

const Home = () => {
  const dispatch = useAppDispatch();
  const maintenanceStatus = false;

  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    dispatch(setShowCart(!maintenanceStatus));
  }, [maintenanceStatus, dispatch]);

  return !maintenanceStatus ? (
    <Flex vertical>
      <Suspense
        fallback={<div style={{ height: '80px', background: '#f0f0f0' }} />}
      >
        <LazyHeader />
      </Suspense>
      <main style={{ maxWidth: '100vw' }}>
        <Suspense fallback={<FullScreenLoading />}>
          <LazyShowcase
            isNavigating={isNavigating}
            setIsNavigating={setIsNavigating}
          />
        </Suspense>
      </main>
      {isNavigating && <FullScreenLoading />}
    </Flex>
  ) : (
    <Flex vertical>
      <Suspense
        fallback={<div style={{ height: '80px', background: '#f0f0f0' }} />}
      >
        <LazyHeader />
      </Suspense>
      <main style={{ maxWidth: '100vw' }}>
        <Suspense fallback={<FullScreenLoading />}>
          <LazyMaintenanceStatus />
        </Suspense>
      </main>
    </Flex>
  );
};

export default Home;
