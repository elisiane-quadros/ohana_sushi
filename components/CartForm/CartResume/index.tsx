import ButtonWhatsapp from '@/components/ButtonWhatsapp';
import { useAppSelector } from '@/hooks/redux';
import { AddressProps } from '@/interfaces/AddressForm';
import { AddressFormError } from '@/interfaces/AddressFormError';
import { CartInterface } from '@/interfaces/CartInterface';
import { PaymentMethod } from '@/interfaces/PaymentMethod';
import createOrderMessage from '@/utils/createOrderMessage';
import { Button, Divider, Flex, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';
import ProductInList from '@/components/ProductInList';

interface CartResumeProps {
  addressForm: AddressProps;
  selectedPaymentMethod: PaymentMethod | null;
  onAddressFormError: Dispatch<SetStateAction<AddressFormError>>;
  onOrderCompleted: (orderCompleted: boolean) => void;
  onShowPaymentMethodError: Dispatch<SetStateAction<boolean>>;
}

const CartResume = ({
  addressForm,
  selectedPaymentMethod,
  onAddressFormError,
  onOrderCompleted,
  onShowPaymentMethodError,
}: CartResumeProps) => {
  const router = useRouter();
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const { Text } = Typography;
  const [releaseRedirection, setReleaseRedirection] = useState(false);
  const [orderButtonClicked, setOrderButtonClicked] = useState(false);

  const handleOrderButtonClicked = () => {
    if (orderButtonClicked && !releaseRedirection) {
      let newAddressFormError: AddressFormError = {
        name: false,
        phone: false,
        streetName: false,
        number: false,
        neighborhood: false,
        city: false,
        zipCode: false,
      };
      if (addressForm.name.length < 2) {
        newAddressFormError.name = true;
      }
      if (!addressForm.streetName) {
        newAddressFormError.streetName = true;
      }
      if (!addressForm.number) {
        newAddressFormError.number = true;
      }
      if (!addressForm.neighborhood) {
        newAddressFormError.neighborhood = true;
      }
      if (!addressForm.city) {
        newAddressFormError.city = true;
      }
      if (addressForm.phone.length < 13) {
        newAddressFormError.phone = true;
      }
      if (!selectedPaymentMethod) {
        onShowPaymentMethodError(true);
      }
      onAddressFormError(newAddressFormError);
    }

    if (orderButtonClicked && releaseRedirection) {
      onOrderCompleted(true);
    }

    setOrderButtonClicked(false);
  };

  const checkMandatoryFieldsToRelease = () => {
    let newReleaseRedirection = true;
    if (
      !addressForm.streetName ||
      !addressForm.number ||
      !addressForm.neighborhood ||
      !addressForm.city ||
      addressForm.phone.length < 13 ||
      !selectedPaymentMethod
    ) {
      newReleaseRedirection = false;
    }
    setReleaseRedirection(newReleaseRedirection);
  };

  useEffect(() => {
    handleOrderButtonClicked();
  }, [orderButtonClicked]);

  useEffect(() => {
    checkMandatoryFieldsToRelease();
  }, [addressForm, selectedPaymentMethod]);

  return (
    <Flex vertical gap={16} justify="space-between" style={{ height: '100%' }}>
      <Flex vertical gap={16} justify="space-between">
        <Flex vertical>
          {cart &&
            cart.cartItemList.map((item) => {
              return (
                <ProductInList
                  key={item.id}
                  item={item}
                  hideSeeCartInProductModal
                />
              );
            })}
        </Flex>
        <Divider style={{ margin: '8px 0' }} />
        {cart ? (
          <Flex vertical gap={8}>
            <Flex justify="space-between">
              <Text style={{ fontWeight: 600 }}>Total de itens:</Text>
              <Text>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(cart.value)}
              </Text>
            </Flex>
            {addressForm.neighborhood ? (
              <Flex vertical gap={8}>
                <Flex justify="space-between">
                  <Text style={{ fontWeight: 600 }}>Valor da entrega:</Text>
                  <Text>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(cart.deliveryCost)}
                  </Text>
                </Flex>
                <Flex justify="space-between">
                  <Text style={{ fontWeight: 600 }}>Total da compra:</Text>
                  <Text>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(cart.value + cart.deliveryCost)}
                  </Text>
                </Flex>
              </Flex>
            ) : (
              <Text style={{ color: '#d81616' }}>
                *Selecione o bairro para calcular o valor da entrega.
              </Text>
            )}
          </Flex>
        ) : null}
        <Divider style={{ margin: '8px 0' }} />
      </Flex>
      <Flex vertical gap={16}>
        {cart ? (
          <ButtonWhatsapp
            whatsappNumber="51996090597"
            whatsappText={createOrderMessage(
              addressForm,
              selectedPaymentMethod,
              cart,
            )}
            style={{
              width: '100%',
            }}
            childrenContainerWidth="100%"
            releaseRedirection={releaseRedirection}
            onButtonClick={setOrderButtonClicked}
          >
            Faça seu pedido
          </ButtonWhatsapp>
        ) : null}
        <Button
          type="link"
          icon={<TiArrowBackOutline />}
          onClick={() => router.push('/')}
        >
          Voltar para a área de compra
        </Button>
      </Flex>
    </Flex>
  );
};

export default CartResume;
