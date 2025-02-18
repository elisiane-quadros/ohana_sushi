'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Flex } from 'antd';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Showcase = dynamic(() => import('@/components/Showcase'), { ssr: false });
const AppBar = dynamic(() => import('@/components/AppBar'), { ssr: false });

const Home = () => {
  return (
    <Flex vertical style={{ position: 'relative', bottom: '100px' }}>
      <Header />
      <main style={{ maxWidth: '100vw' }}>
        <Showcase />
      </main>
    </Flex>
  );
};

export default Home;
