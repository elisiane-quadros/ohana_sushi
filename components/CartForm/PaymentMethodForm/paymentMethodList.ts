import { PaymentMethod } from '@/interfaces/PaymentMethod';

const paymentMethodList: PaymentMethod[] = [
  {
    id: 1,
    title: 'PIX',
    description: 'copia e cola',
    type: 'PIX',
    order: 1,
    enable: true,
  },
  {
    id: 2,
    title: 'Débito',
    description: 'pagamento na entrega',
    type: 'DEBIT_CARD',
    order: 2,
    enable: true,
  },
  {
    id: 3,
    title: 'Crédito',
    description: 'pagamento na entrega',
    type: 'CREDIT_CARD',
    order: 3,
    enable: true,
  },

  {
    id: 4,
    title: 'Dinheiro',
    description: 'pagamento na entrega',
    type: 'MONEY',
    order: 4,
    enable: true,
  },
];

export default paymentMethodList;
