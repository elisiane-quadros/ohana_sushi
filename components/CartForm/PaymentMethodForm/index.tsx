import { Col, Flex, Row, Typography } from 'antd';
import { PaymentMethodButton, PaymentMethodFormContainer } from './styles';
import { PaymentMethod } from '@/interfaces/PaymentMethod';
import paymentMethodList from './paymentMethodList';
import Icon from '@mdi/react';
import { mdiCurrencyUsd } from '@mdi/js';
import useResponsive from '@/hooks/useResponsive';
import selectPaymentMethodIcon from '@/utils/selectPaymentMethodIcon';
import { Dispatch, SetStateAction } from 'react';

interface PaymentMethodFormProps {
  selectedPaymentMethod: PaymentMethod | null;
  onSelectedPaymentMethod: (selectedPaymentMethod: PaymentMethod) => void;
  showPaymentMethodError: boolean;
  onShowPaymentMethodError: Dispatch<SetStateAction<boolean>>;
}

const PaymentMethodForm = ({
  selectedPaymentMethod,
  onSelectedPaymentMethod,
  showPaymentMethodError,
  onShowPaymentMethodError,
}: PaymentMethodFormProps) => {
  const { Title, Text } = Typography;
  const { isXs } = useResponsive();

  const filteredPaymentMethodList = paymentMethodList
    .filter((paymentMethod) => paymentMethod.enable)
    .sort((a, b) => a.order - b.order);

  const handleSelectedPaymentMethod = (paymentMethod: PaymentMethod) => {
    onSelectedPaymentMethod(paymentMethod);
    onShowPaymentMethodError(false);
  };

  return (
    <PaymentMethodFormContainer gap={8} vertical>
      <Flex
        gap={8}
        align={isXs ? 'flex-start' : 'flex-end'}
        style={{ marginBottom: '10px' }}
        vertical={isXs}
      >
        <Flex gap={8} align="flex-end">
          <Icon path={mdiCurrencyUsd} size={1} color="#d81616" />
          <Title level={4} style={{ marginBottom: 0, lineHeight: 1.3 }}>
            Forma de Pagamento
          </Title>
        </Flex>
        {showPaymentMethodError && (
          <Text type="danger">Selecione uma forma de pagamento</Text>
        )}
      </Flex>
      <Row gutter={[8, 8]}>
        {filteredPaymentMethodList.map((paymentMethod) => (
          <Col key={paymentMethod.id} xs={24} sm={12}>
            <PaymentMethodButton
              key={paymentMethod.id}
              onClick={() => handleSelectedPaymentMethod(paymentMethod)}
              $isActive={selectedPaymentMethod?.id === paymentMethod.id}
            >
              {selectPaymentMethodIcon({
                type: paymentMethod.type,
                iconColor:
                  selectedPaymentMethod?.id === paymentMethod.id
                    ? '#FFF'
                    : '#333',
              })}
              <Flex vertical style={{ width: '100%', paddingRight: '20px' }}>
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
          </Col>
        ))}
      </Row>
    </PaymentMethodFormContainer>
  );
};

export default PaymentMethodForm;
