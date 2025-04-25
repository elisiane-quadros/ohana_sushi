import { PaymentMethodType } from '@/interfaces/PaymentMethodType';
import { ReactIconContainer } from './styles';
import { MdPix } from 'react-icons/md';
import Icon from '@mdi/react';
import { mdiCash, mdiCreditCard, mdiCreditCardFastOutline } from '@mdi/js';

interface SelectPaymentMethodIconProps {
  type: PaymentMethodType;
  iconColor?: string;
}

const selectPaymentMethodIcon = ({
  type,
  iconColor,
}: SelectPaymentMethodIconProps) => {
  switch (type) {
    case 'PIX':
      return (
        <ReactIconContainer>
          <MdPix color={iconColor ? iconColor : '#333'} />
        </ReactIconContainer>
      );
    case 'CREDIT_CARD':
      return (
        <Icon
          path={mdiCreditCard}
          size={1}
          color={iconColor ? iconColor : '#333'}
        />
      );
    case 'DEBIT_CARD':
      return (
        <Icon
          path={mdiCreditCardFastOutline}
          size={1}
          color={iconColor ? iconColor : '#333'}
        />
      );
    case 'MONEY':
      return (
        <Icon
          path={mdiCash}
          size={1.1}
          color={iconColor ? iconColor : '#333'}
        />
      );
    default:
      null;
  }
};

export default selectPaymentMethodIcon;
