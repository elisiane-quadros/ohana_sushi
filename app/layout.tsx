import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ohana Sushi',
};

import { Layout, Menu } from 'antd';
import { ReactNode } from 'react';
import './globals.css';

const { Header, Content, Footer } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
