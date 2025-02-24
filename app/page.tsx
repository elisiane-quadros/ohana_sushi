'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Flex } from 'antd';
import Showcase2 from '@/components/Showcase2';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
// const Showcase = dynamic(() => import('@/components/Showcase'), { ssr: false });
// const AppBar = dynamic(() => import('@/components/AppBar'), { ssr: false });

const Home = () => {
  return (
    <Flex vertical style={{ position: 'relative', bottom: '100px' }}>
      <Header />
      <main style={{ maxWidth: '100vw' }}>
        <Showcase2 />
      </main>
    </Flex>
  );
};

export default Home;
