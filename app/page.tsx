'use client';

import React, { useEffect } from 'react';
import { Flex } from 'antd';
import { useAppDispatch } from '@/hooks/redux';
import { setShowCart } from '@/store/features/cart';
import Showcase2 from '@/components/Showcase2';
import Header from '@/components/Header';
import MaintenanceStatus from '@/components/MaintenanceStatus';

const Home = () => {
  const dispatch = useAppDispatch();
  const maintenanceStatus = true;

  useEffect(() => {
    dispatch(setShowCart(!maintenanceStatus));
  }, [maintenanceStatus]);

  return !maintenanceStatus ? (
    <Flex vertical>
      <Header />
      <main style={{ maxWidth: '100vw' }}>
        <Showcase2 />
      </main>
    </Flex>
  ) : (
    <Flex vertical>
      <Header />
      <main style={{ maxWidth: '100vw' }}>
        <MaintenanceStatus />
      </main>
    </Flex>
  );
};

export default Home;
