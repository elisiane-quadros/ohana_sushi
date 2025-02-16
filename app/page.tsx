'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Showcase = dynamic(() => import('@/components/Showcase'), { ssr: false });
const AppBar = dynamic(() => import('@/components/AppBar'), { ssr: false });

const Home = () => {
  return (
    <>
      <Header />
      <main style={{ maxWidth: '100vw' }}>
        <Showcase />
      </main>
    </>
  );
};

export default Home;
