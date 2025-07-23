import { createStaticPix, hasError } from 'pix-utils';
import { pixKey } from './pixKey';

const generatePixPayload = (value: number): string | null => {
  const pix = createStaticPix({
    merchantName: 'Ohana Sushi',
    merchantCity: 'Porto Alegre',
    pixKey: pixKey,
    infoAdicional: 'Gerado por Ohana Sushi',
    transactionAmount: value,
  });

  if (!hasError(pix)) {
    const brCode = pix.toBRCode();
    return brCode;
  } else {
    return null;
  }
};

export default generatePixPayload;
