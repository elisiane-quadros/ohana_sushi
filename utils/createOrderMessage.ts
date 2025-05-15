import { AddressProps } from '@/interfaces/AddressForm';
import { CartInterface } from '@/interfaces/CartInterface';
import { PaymentMethod } from '@/interfaces/PaymentMethod';

const createOrderMessage = (
  addressForm: AddressProps,
  selectedPaymentMethod: PaymentMethod | null,
  cart: CartInterface,
) => {
  let message = `Olá, quero fazer o meu pedido.\n\n`;

  message += `🛒 *ITENS DO CARRINHO:*\n`;
  cart.cartItemList.forEach((item, index) => {
    const itemTotal = (item.quantity * item.product.price).toLocaleString(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      },
    );
    message += `  *${index + 1}.* ${item.product.title} - ${item.quantity}x ${itemTotal}\n`;
  });
  message += `Valor da entrega: R$ ${cart.deliveryCost.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })}\n`;
  message += `Total: R$ ${(cart.value + cart.deliveryCost).toLocaleString(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
    },
  )}\n`;

  message += `\n📍 *ENDEREÇO PARA A ENTREGA:*\n`;
  message += `🏠 ${addressForm.streetName}, ${addressForm.number} - ${addressForm.complement}\n`;
  message += `${addressForm.neighborhood} - ${addressForm.city}\n`;
  message += addressForm.reference
    ? `🔍 *Referência:* ${addressForm.reference}\n`
    : '';
  message += `📞 *Whatsapp:* ${addressForm.phone}\n`;
  message += addressForm.zipCode ? `📦 *CEP:* ${addressForm.zipCode}\n` : '';

  message += `\n💳 *FORMA DE PAGAMENTO:* ${selectedPaymentMethod?.title}`;
  message += `\n ${selectedPaymentMethod?.type === 'PIX' ? '📱 *Chave PIX*: 51996090597' : 'Obs.: Pagamento na entrega'}\n`;

  message += selectedPaymentMethod?.type === 'PIX' ? '\n*ATENÇÃO!!!*' : '';
  message += `\n${selectedPaymentMethod?.type === 'PIX' ? 'Envie o comprovante do Pix para concluir o seu pedido!' : 'Aguardo a confirmação! 😊'}`;

  return encodeURIComponent(message);
};

export default createOrderMessage;
