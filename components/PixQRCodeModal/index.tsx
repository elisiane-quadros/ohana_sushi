import { Flex, Modal, Typography } from 'antd';
import { PixQRCode } from '../PixQRCode';

interface PixQRCodeModalProps {
  isQRCodeModalOpen: boolean;
  onIsQRCodeModalOpen: (isOpen: boolean) => void;
  value: number;
}

const PixQRCodeModal = ({
  isQRCodeModalOpen,
  onIsQRCodeModalOpen,
  value,
}: PixQRCodeModalProps) => {
  const { Text } = Typography;

  return (
    <Modal
      title="QR Code PIX"
      open={isQRCodeModalOpen}
      onOk={() => onIsQRCodeModalOpen(false)}
      onCancel={() => onIsQRCodeModalOpen(false)}
      centered
    >
      <Flex vertical align="center" gap={16}>
        <PixQRCode value={value} />
        <Text>
          Escaneie o QR Code acima com o app do seu banco para realizar o
          pagamento via PIX
        </Text>
        <Text type="secondary">
          Valor:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(value)}
        </Text>
      </Flex>
    </Modal>
  );
};

export default PixQRCodeModal;
