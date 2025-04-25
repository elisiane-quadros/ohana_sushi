import React from 'react';
import type { Metadata } from 'next';
import { Kaushan_Script, Inria_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import ReduxAndAppProvider from '@/providers/ReduxAndAppProvider';
import { Flex } from 'antd';

const kaushanScript = Kaushan_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--kaushan-script',
});
const inriaSans = Inria_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  variable: '--inria-sans',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--montserrat',
});

export const metadata: Metadata = {
  title: 'Ohana Sushi',
  description: 'Japanese Restaurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${kaushanScript.variable} ${inriaSans.variable} ${montserrat.variable}`}
        suppressHydrationWarning={true}
      >
        <ReduxAndAppProvider>
          <Flex vertical>{children}</Flex>
        </ReduxAndAppProvider>
      </body>
    </html>
  );
}
