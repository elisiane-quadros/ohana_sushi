import useResponsive from '@/hooks/useResponsive';
import selectPaymentMethodIcon from '@/utils/selectPaymentMethodIcon';
import {
  mdiContentCopy,
  mdiCurrencyUsd,
  mdiFormatListBulletedSquare,
  mdiMapMarkerRadiusOutline,
  mdiQrcode,
} from '@mdi/js';
import Icon from '@mdi/react';
import {
  Alert,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  message,
  Row,
  Typography,
} from 'antd';
import ButtonPrimary from '../ButtonPrimary';
import Image from 'next/image';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import { TiArrowBackOutline } from 'react-icons/ti';
import ButtonWhatsapp from '../ButtonWhatsapp';
import createOrderMessage from '@/utils/createOrderMessage';
import { useAppSelector } from '@/hooks/redux';
import { Order } from '@/interfaces/Order';
import { useEffect, useState } from 'react';
import generatePixPayload from '@/utils/generatePixPayload';
import PixQRCodeModal from '../PixQRCodeModal';
import { useRouter } from 'next/navigation';

const OrderCompleted = () => {
  const router = useRouter();
  const { isXs, isMdUp } = useResponsive();
  const { Title, Text } = Typography;
  const orderList: Order[] = useAppSelector((state) => state.order.orderList);
  const [messageApi, contextHolder] = message.useMessage();

  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [isQRCodeModalOpen, setIsQRCodeModalOpen] = useState(false);

  const handleCopyToClipboard = async (type: 'KEY' | 'CODE') => {
    try {
      if (type === 'KEY') {
        await navigator.clipboard.writeText('51996090597');
        messageApi.open({
          type: 'success',
          content: 'Chave PIX copiada!',
        });
        return;
      }
      if (type === 'CODE' && currentOrder) {
        await navigator.clipboard.writeText(
          generatePixPayload(currentOrder.cartList[0].value) || '',
        );
        messageApi.open({
          type: 'success',
          content: 'PIX copiado!',
        });
      }
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
    }
  };

  const alertMessage = () => (
    <Flex vertical>
      <Title level={2}>Pedido encaminhado!</Title>
      <Text>Conclua seu pedido pelo Whatsapp</Text>
    </Flex>
  );

  useEffect(() => {
    if (orderList.length) {
      const newCurrentOrder = orderList[orderList.length - 1];
      setCurrentOrder(newCurrentOrder);
    }
  }, [orderList]);

  return (
    <Flex
      vertical
      align="center"
      style={{ padding: '16px 16px 32px 16px', background: '#f7f7f7' }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '1376px',
          marginTop: '100px',
        }}
        size={isXs ? 'small' : 'default'}
      >
        <Alert
          message={alertMessage()}
          type="success"
          style={{ marginBottom: '16px' }}
        />
        {currentOrder ? (
          <Flex vertical gap={16}>
            <Title level={3}>Detalhes do pedido:</Title>
            <Row gutter={isMdUp ? [16, 16] : [32, 32]}>
              <Col xs={24} md={14} lg={8}>
                <Flex align="center" gap={8} style={{ margin: '0 0 16px 0' }}>
                  <Icon
                    path={mdiMapMarkerRadiusOutline}
                    size={1}
                    color="#d81616"
                  />
                  <Title level={5} style={{ marginBottom: 0 }}>
                    Endereço de entrega
                  </Title>
                </Flex>
                <Flex vertical>
                  <Flex gap={4}>
                    <Text style={{ width: 'auto' }}>
                      <Text strong>Logradouro:</Text>{' '}
                      {`${currentOrder.addressForm.streetName}, ${currentOrder.addressForm.number}`}
                    </Text>
                  </Flex>
                  {currentOrder.addressForm.complement ? (
                    <Flex gap={4}>
                      <Text strong>Complemento:</Text>
                      <Text>{currentOrder.addressForm.complement}</Text>
                    </Flex>
                  ) : null}
                  <Flex gap={4}>
                    <Text strong>Bairro:</Text>
                    <Text>{currentOrder.addressForm.neighborhood}</Text>
                  </Flex>
                  {currentOrder.addressForm.reference ? (
                    <Flex gap={4}>
                      <Text strong>Ponto de referência:</Text>
                      <Text>{currentOrder.addressForm.reference}</Text>
                    </Flex>
                  ) : null}
                  <Flex gap={4}>
                    <Text strong>Cidade:</Text>
                    <Text>{currentOrder.addressForm.city}</Text>
                  </Flex>
                </Flex>
              </Col>
              <Col xs={24} md={10} lg={6}>
                <Flex gap={8} align="flex-end" style={{ margin: '0 0 16px 0' }}>
                  <Icon path={mdiCurrencyUsd} size={1} color="#d81616" />
                  <Title level={5} style={{ marginBottom: 0 }}>
                    Forma de Pagamento
                  </Title>
                </Flex>
                <Flex vertical gap={16}>
                  <Flex align="center" gap={8}>
                    <Title
                      level={5}
                      style={{
                        marginBottom: 0,
                        wordBreak: 'keep-all',
                      }}
                    >
                      {currentOrder.paymentMethod.title}
                    </Title>
                    {selectPaymentMethodIcon({
                      type: currentOrder.paymentMethod.type,
                    })}
                    {currentOrder.paymentMethod.type === 'PIX' ? (
                      <Button
                        type="link"
                        icon={<Icon path={mdiContentCopy} size={0.7} />}
                        onClick={(e) => {
                          e.stopPropagation(); // Previne que o clique propague para o PaymentMethodButton
                          handleCopyToClipboard('KEY');
                        }}
                      >
                        pix: 51996090597
                      </Button>
                    ) : null}
                  </Flex>
                  {currentOrder.paymentMethod.type === 'PIX' ? (
                    <Flex vertical gap={12}>
                      <ButtonPrimary
                        // style={{
                        //   padding: '0 30px',
                        //   // height: '24px',
                        //   width: '100%',
                        // }}
                        icon={<Icon path={mdiContentCopy} size={0.7} />}
                        onClick={(e) => {
                          e.stopPropagation(); // Previne que o clique propague para o PaymentMethodButton
                          handleCopyToClipboard('CODE');
                        }}
                      >
                        Gerar PIX copia e cola
                      </ButtonPrimary>
                      <ButtonPrimary
                        icon={<Icon path={mdiQrcode} size={1} />}
                        onClick={() => setIsQRCodeModalOpen(true)}
                      >
                        Gerar QR Code
                      </ButtonPrimary>
                      <PixQRCodeModal
                        isQRCodeModalOpen={isQRCodeModalOpen}
                        onIsQRCodeModalOpen={setIsQRCodeModalOpen}
                        value={currentOrder.cartList[0].value}
                      />
                    </Flex>
                  ) : null}
                  {currentOrder.paymentMethod.type === 'PIX' ? (
                    <Text>
                      Atenção: Lembre-se de enviar o comprovante do Pix pelo
                      Whatsapp para concluir seu pedido.
                    </Text>
                  ) : (
                    <Text>
                      Atenção: O pagamento deve ser feito no momento da entrega.
                    </Text>
                  )}
                </Flex>
              </Col>
              <Col xs={24} md={24} lg={10}>
                <Flex gap={8} align="flex-end" style={{ margin: '0 0 16px 0' }}>
                  <Icon
                    path={mdiFormatListBulletedSquare}
                    size={1}
                    color="#d81616"
                  />
                  <Title level={5} style={{ marginBottom: 0 }}>
                    Itens
                  </Title>
                </Flex>
                <Flex
                  vertical
                  gap={8}
                  // style={{ paddingLeft: isXs ? '16px' : '0' }}
                >
                  {currentOrder.cartList[0].cartItemList.map((item) => {
                    return (
                      <Flex vertical>
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
                            gap={2}
                          >
                            <Flex style={{ width: '100%' }} gap={4}>
                              <Text
                                style={{ fontWeight: 600, lineHeight: 1.1 }}
                              >
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
                              <Flex align="flex-end" gap={4}>
                                <Text
                                  style={{
                                    fontSize: '12.8px',
                                    lineHeight: 1,
                                    fontWeight: 600,
                                  }}
                                >
                                  val. unitário:
                                </Text>
                                <Text style={{ lineHeight: 1 }}>
                                  {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                  }).format(item.product.price)}
                                </Text>
                              </Flex>
                              <Flex align="flex-end" gap={4}>
                                <Text
                                  style={{ lineHeight: 1 }}
                                >{`x${item.quantity}`}</Text>
                                <Text
                                  style={{
                                    width: '72px',
                                    textAlign: 'end',
                                    lineHeight: 1,
                                  }}
                                >
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
                  <Flex justify="space-between">
                    <Text style={{ fontWeight: 600 }}>Total da compra:</Text>
                    <Text>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(currentOrder.cartList[0].value)}
                    </Text>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </Flex>
        ) : null}
      </Card>
      <Card
        style={{
          width: '100%',
          maxWidth: '1376px',
          marginTop: isXs ? '8px' : '16px',
        }}
        size={isXs ? 'small' : 'default'}
      >
        <Row gutter={isMdUp ? [16, 16] : [32, 32]}>
          <Col xs={24} md={14} lg={8}>
            {null}
          </Col>
          <Col xs={24} md={10} lg={6}>
            <Flex
              style={{ width: '100%', height: '60px' }}
              align="center"
              justify="center"
            >
              <Button
                type="link"
                icon={<TiArrowBackOutline />}
                onClick={() => router.push('/')}
              >
                Voltar para a área de compra
              </Button>
            </Flex>
          </Col>
          <Col xs={24} md={24} lg={10}>
            {currentOrder?.paymentMethod ? (
              <ButtonWhatsapp
                whatsappNumber="51996090597"
                whatsappText={createOrderMessage(
                  currentOrder?.addressForm,
                  currentOrder?.paymentMethod,
                  currentOrder?.cartList[0],
                )}
                style={{
                  width: '100%',
                }}
                childrenContainerWidth="100%"
              >
                Reencaminha pedido
              </ButtonWhatsapp>
            ) : null}
          </Col>
        </Row>
      </Card>
      {contextHolder}
    </Flex>
  );
};

export default OrderCompleted;
