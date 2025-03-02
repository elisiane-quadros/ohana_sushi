import {
  AddressAndPaymentContainer,
  AddressCardContainer,
  CartResumeContainer,
} from './styles';
import useResponsive from '@/hooks/useResponsive';
import AddressForm from './AddressForm';
import PaymentMethodForm from './PaymentMethodForm';

const CartForm = () => {
  const { isMdDown } = useResponsive();

  return (
    <AddressCardContainer gap={16} vertical={isMdDown}>
      <AddressAndPaymentContainer>
        <AddressForm />
        <PaymentMethodForm />
      </AddressAndPaymentContainer>
      <CartResumeContainer>
        <span>cart</span>
      </CartResumeContainer>
    </AddressCardContainer>
  );
};

export default CartForm;
