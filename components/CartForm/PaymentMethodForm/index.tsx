import { Flex, Typography } from 'antd';
import { MdPix } from 'react-icons/md';
import {
  PaymentMethodButton,
  PaymentMethodFormContainer,
  ReactIconContainer,
} from './styles';
import { PaymentMethod } from '@/interfaces/PaymentMethod';
import paymentMethodList from './paymentMethodList';
import { useState } from 'react';
import Icon from '@mdi/react';
import { mdiCurrencyUsd } from '@mdi/js';
import { PaymentMethodType } from '@/interfaces/PaymentMethodType';

const PaymentMethodForm = () => {
  const { Title, Text } = Typography;

  const filteredPaymentMethodList = paymentMethodList
    .filter((paymentMethod) => paymentMethod.enable)
    .sort((a, b) => a.order - b.order);

  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);

  const handleSelectedPaymentMethod = (paymentMethod: PaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
  };

  const selectButtonIcon = (type: PaymentMethodType) => {
    switch (type) {
      case 'CREDIT_CARD':
        return <MdPix />;
      default:
        null;
    }
  };

  return (
    <PaymentMethodFormContainer gap={8} vertical>
      <Flex gap={8} align="center" style={{ marginBottom: '10px' }}>
        <Icon path={mdiCurrencyUsd} size={1} color="#d81616" />
        <Title level={4} style={{ marginBottom: 0 }}>
          Forma de Pagamento
        </Title>
      </Flex>
      <Flex gap={8}>
        {filteredPaymentMethodList.map((paymentMethod) => (
          <PaymentMethodButton
            key={paymentMethod.id}
            onClick={() => handleSelectedPaymentMethod(paymentMethod)}
            $isActive={selectedPaymentMethod?.id === paymentMethod.id}
          >
            {paymentMethod.type === 'PIX' ? (
              <ReactIconContainer>
                <MdPix />
              </ReactIconContainer>
            ) : (
              selectButtonIcon(paymentMethod.type)
            )}
            <Flex vertical style={{ width: '100%' }}>
              <Title
                level={4}
                style={{
                  marginBottom: 0,
                  color: `${selectedPaymentMethod?.id === paymentMethod.id ? '#FFF' : '#333'}`,
                }}
              >
                {paymentMethod.title}
              </Title>
              <Text
                style={{
                  color: `${selectedPaymentMethod?.id === paymentMethod.id ? '#FFF' : '#333'}`,
                }}
              >
                {paymentMethod.description}
              </Text>
            </Flex>
          </PaymentMethodButton>
        ))}
      </Flex>
    </PaymentMethodFormContainer>
  );
};

export default PaymentMethodForm;
