// components/PixQRCode.tsx
import { QRCode } from 'antd';
import { useEffect, useState } from 'react';
import { createStaticPix, hasError } from 'pix-utils';
import generatePixPayload from '@/utils/generatePixPayload';

type PixQRCodeProps = {
  value: number;
};

export const PixQRCode = ({ value }: PixQRCodeProps) => {
  const [payload, setPayload] = useState('');

  useEffect(() => {
    const newPayload = generatePixPayload(value);
    setPayload(newPayload || '');
  }, [value]);

  if (!payload) {
    return <div>Carregando...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <QRCode
        value={payload}
        size={256}
        // icon="/logo.png" // opcional: ícone no meio do QR
        bordered
      />
      {/* <p style={{ marginTop: '1rem', wordBreak: 'break-word' }}>{payload}</p> */}
    </div>
  );
};
