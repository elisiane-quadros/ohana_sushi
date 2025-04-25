import { createStaticPix, hasError } from 'pix-utils';

const generatePixPayload = (value: number): string | null => {
  const pix = createStaticPix({
    merchantName: 'Ohana Sushi',
    merchantCity: 'Porto Alegre',
    pixKey: '00033064024',
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
