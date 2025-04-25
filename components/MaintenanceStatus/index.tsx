import { Flex, Typography } from 'antd';
import { MaintenanceStatusContainer } from './styles';
import Icon from '@mdi/react';
import { mdiWhatsapp } from '@mdi/js';
import { IoLogoWhatsapp } from 'react-icons/io';
import useResponsive from '@/hooks/useResponsive';
import { IoConstruct } from 'react-icons/io5';
import ButtonWhatsapp from '../ButtonWhatsapp';

const MaintenanceStatus = () => {
  const { Title, Text } = Typography;
  const { isXs } = useResponsive();

  return (
    <MaintenanceStatusContainer align="center" justify="center">
      <Flex
        vertical
        align="center"
        justify="center"
        style={{ width: '100%', maxWidth: '800px', padding: '16px' }}
        gap={16}
      >
        <Flex style={{ width: '100%' }} gap={16} align="center" vertical={isXs}>
          <IoConstruct style={{ width: '30px', height: '30px' }} />
          <Flex vertical>
            <Title level={2} style={{ margin: 0, textAlign: 'start' }}>
              Nosso site ainda está em contrução
            </Title>
          </Flex>
        </Flex>
        <Flex
          vertical
          align="center"
          justify="center"
          gap={32}
          style={{
            marginTop: '16px',
            background: '#FFF',
            width: '100%',
            padding: '16px',
            borderRadius: '6px',
          }}
        >
          <Text
            style={{
              margin: 0,
              fontSize: '22px',
              lineHeight: 1.3,
            }}
          >
            Enquanto isso, você pode pedir o nosso menu pelo whatsapp
          </Text>
          <ButtonWhatsapp
            whatsappNumber="51996090597"
            whatsappText="Olá,%20estou%20vindo%20do%20www.ohanasushi.com.br%20e%20quero%20fazer%20um%20pedido"
          />
          <Flex
            align={isXs ? 'flex-start' : 'center'}
            justify={isXs ? 'center' : 'flex-start'}
            gap={isXs ? 0 : 8}
            style={{ width: '100%' }}
            vertical={isXs}
          >
            <Flex
              gap={2}
              align={!isXs ? 'center' : 'flex-start'}
              style={{ width: `${isXs ? '100%' : 'fit-content'}` }}
            >
              <Icon path={mdiWhatsapp} size={0.7} />
              <Text>(51) 99609-0597</Text>
            </Flex>
            <Text>@ohanasushi_delivery</Text>
          </Flex>
        </Flex>
      </Flex>
    </MaintenanceStatusContainer>
  );
};

export default MaintenanceStatus;
