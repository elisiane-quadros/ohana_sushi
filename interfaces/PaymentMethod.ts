import { PaymentMethodType } from './PaymentMethodType';

export interface PaymentMethod {
  id: number;
  title: string;
  description: string;
  type: PaymentMethodType;
  order: number;
  enable: boolean;
}
