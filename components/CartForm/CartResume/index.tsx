import ButtonWhatsapp from '@/components/ButtonWhatsapp';
import ChooseButton from '@/components/ChooseButton';
import { useAppSelector } from '@/hooks/redux';
import { AddressProps } from '@/interfaces/AddressForm';
import { AddressFormError } from '@/interfaces/AddressFormError';
import { CartInterface } from '@/interfaces/CartInterface';
import { PaymentMethod } from '@/interfaces/PaymentMethod';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import createOrderMessage from '@/utils/createOrderMessage';
import { Button, Divider, Flex, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { TiArrowBackOutline } from 'react-icons/ti';

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
        phone: false,
        streetName: false,
        number: false,
        neighborhood: false,
        city: false,
        zipCode: false,
      };
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
        {cart &&
          cart.cartItemList.map((item) => {
            return (
              <Flex vertical key={item.id}>
                <Flex
                  style={{ width: '100%', padding: '4px 0' }}
                  gap={4}
                  key={item.id}
                >
                  <Image
                    src={item.product.image}
                    alt="example"
                    height={31.95}
                    width={42.6}
                  />
                  <Flex
                    vertical
                    justify="space-between"
                    style={{ width: '100%' }}
                  >
                    <Flex style={{ width: '100%' }} gap={4}>
                      <Text style={{ fontWeight: 600, lineHeight: 1.1 }}>
                        {item.product.title}
                      </Text>
                      {item.product.type === 'COMBO' ? (
                        <Text
                          style={{
                            lineHeight: 1.1,
                            fontSize: '12.8px',
                          }}
                        >
                          {`${calculateComboTotalItems(item.product.ingredientList)} peças`}
                        </Text>
                      ) : null}
                    </Flex>
                    <Flex
                      justify="space-between"
                      align="flex-end"
                      style={{ width: '100%' }}
                    >
                      <Flex vertical>
                        <Text
                          style={{
                            fontSize: '12.8px',
                            lineHeight: 1,
                            fontWeight: 600,
                          }}
                        >
                          val. unitário:
                        </Text>
                        <Text>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(item.product.price)}
                        </Text>
                      </Flex>
                      <Flex gap={4}>
                        <ChooseButton product={item.product} activeAlert />
                        <Text style={{ width: '80px', textAlign: 'end' }}>
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(item.product.price * item.quantity)}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        <Divider style={{ margin: '8px 0' }} />
        {cart ? (
          <Flex justify="space-between">
            <Text style={{ fontWeight: 600 }}>Total da compra:</Text>
            <Text>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(cart.value)}
            </Text>
          </Flex>
        ) : null}
        <Divider style={{ margin: '8px 0' }} />
      </Flex>
      <Flex vertical gap={16}>
        {cart ? (
          <ButtonWhatsapp
            whatsappNumber="48991385686" // "51996090597"
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
