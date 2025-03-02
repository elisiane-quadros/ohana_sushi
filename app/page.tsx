'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Flex } from 'antd';
import { useAppDispatch } from '@/hooks/redux';
import { setShowCart } from '@/store/features/cart';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Showcase2 = dynamic(() => import('@/components/Showcase2'), {
  ssr: false,
});
const PreviewStatus = dynamic(() => import('@/components/PreviewStatus'), {
  ssr: false,
});

const Home = () => {
  const dispatch = useAppDispatch();
  const previewStatus = true;

  useEffect(() => {
    dispatch(setShowCart(!previewStatus));
  }, [previewStatus]);

  return !previewStatus ? (
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
        <PreviewStatus />
      </main>
    </Flex>
  );
};

export default Home;
