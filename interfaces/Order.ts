import { AddressProps } from './AddressForm';
import { CartInterface } from './CartInterface';
import { PaymentMethod } from './PaymentMethod';

export interface Order {
  id: string;
  cartList: CartInterface[];
  addressForm: AddressProps;
  paymentMethod: PaymentMethod;
  orderStatus: 'OPEN' | 'CLOSED' | 'CANCELED' | 'PAID' | 'DELIVERED';
  createdAt: Date;
  updatedAt: Date;
}
