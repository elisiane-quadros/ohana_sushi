import Icon from '@mdi/react';
import {
  AddressAndPaymentContainer,
  AddressCardContainer,
  CartResumeContainer,
  PaymentMethodFormContainer,
} from './styles';
import useResponsive from '@/hooks/useResponsive';
import AddressForm from './AddressForm';

const CartForm = () => {
  const { isMdDown } = useResponsive();

  return (
    <AddressCardContainer gap={16} vertical={isMdDown}>
      <AddressAndPaymentContainer>
        <AddressForm />
        <PaymentMethodFormContainer>
          <span>payment</span>
        </PaymentMethodFormContainer>
      </AddressAndPaymentContainer>
      <CartResumeContainer>
        <span>cart</span>
      </CartResumeContainer>
    </AddressCardContainer>
  );
};

export default CartForm;
