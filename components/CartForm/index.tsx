import {
  AddressAndPaymentContainer,
  CardContainer,
  CartResumeContainer,
} from './styles';
import { v4 as uuidv4 } from 'uuid';
import useResponsive from '@/hooks/useResponsive';
import AddressForm from './AddressForm';
import PaymentMethodForm from './PaymentMethodForm';
import { CartInterface } from '@/interfaces/CartInterface';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useEffect, useState } from 'react';
import { PaymentMethod } from '@/interfaces/PaymentMethod';
import { AddressProps } from '@/interfaces/AddressForm';
import { setCart } from '@/store/features/cart';
import { Order } from '@/interfaces/Order';
import { setOrderList } from '@/store/features/order';
import CartResume from './CartResume';
import { AddressFormError } from '@/interfaces/AddressFormError';
import { DeliveryCost } from '@/interfaces/DeliveryCost';

interface CartFormProps {
  orderCompleted: boolean;
  onOrderCompleted: (orderCompleted: boolean) => void;
}

const CartForm = ({ orderCompleted, onOrderCompleted }: CartFormProps) => {
  const { isMdDown } = useResponsive();
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const deliveryCost: DeliveryCost | null = useAppSelector(
    (state) => state.neighborhood.neighborhood,
  );
  const orderList = useAppSelector((state) => state.order.orderList);
  const dispatch = useAppDispatch();

  // const [hasPaymentMethodSelected, setHasPaymentMethodSelected] =
  //   useState(false);

  const [addressForm, setAddressForm] = useState<AddressProps>({
    phone: '',
    streetName: '',
    number: '',
    complement: '',
    neighborhood: deliveryCost?.name || '',
    city: '',
    reference: '',
    zipCode: '',
    deliveryCost: 0,
  });
  const [addressFormError, setAddressFormError] = useState<AddressFormError>({
    phone: false,
    streetName: false,
    number: false,
    neighborhood: false,
    city: false,
    zipCode: false,
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);
  const [showPaymentMethodError, setShowPaymentMethodError] = useState(false);

  const createOrder = () => {
    if (cart && selectedPaymentMethod) {
      const newOrder: Order = {
        id: uuidv4(),
        cartList: [cart],
        addressForm: addressForm,
        paymentMethod: selectedPaymentMethod,
        orderStatus: 'OPEN',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      dispatch(setOrderList([...orderList, newOrder]));
    }
  };

  useEffect(() => {
    if (cart && orderCompleted) {
      dispatch(setCart(null));
      createOrder();
    }
  }, [orderCompleted]);

  return (
    <CardContainer gap={16} vertical={isMdDown}>
      <>
        <AddressAndPaymentContainer>
          <AddressForm
            addressForm={addressForm}
            onAddressForm={setAddressForm}
            addressFormError={addressFormError}
            onAddressFormError={setAddressFormError}
          />
          <PaymentMethodForm
            selectedPaymentMethod={selectedPaymentMethod}
            onSelectedPaymentMethod={setSelectedPaymentMethod}
            showPaymentMethodError={showPaymentMethodError}
            onShowPaymentMethodError={setShowPaymentMethodError}
          />
        </AddressAndPaymentContainer>
        <CartResumeContainer>
          <CartResume
            addressForm={addressForm}
            selectedPaymentMethod={selectedPaymentMethod}
            onAddressFormError={setAddressFormError}
            onShowPaymentMethodError={setShowPaymentMethodError}
            onOrderCompleted={onOrderCompleted}
          />
        </CartResumeContainer>
      </>
    </CardContainer>
  );
};

export default CartForm;
