import { Button, Flex, Typography } from 'antd';
import { PreviewStatusContainer, WhatsappButton } from './styles';
import Icon from '@mdi/react';
import { mdiWhatsapp } from '@mdi/js';
import { IoLogoWhatsapp } from 'react-icons/io';
import useResponsive from '@/hooks/useResponsive';
import { IoConstruct } from 'react-icons/io5';

const PreviewStatus = () => {
  const { Title, Text } = Typography;
  const { isXs } = useResponsive();

  return (
    <PreviewStatusContainer align="center" justify="center">
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
          <WhatsappButton>
            <Flex
              align="center"
              justify="center"
              gap={8}
              style={{
                width: '180px',
                background: '#00BB2D',
                padding: 'none',
                borderRadius: '11px',
                height: '44px',
                border: '2px solid #FFF',
              }}
            >
              <IoLogoWhatsapp style={{ width: '26px', height: '26px' }} />
              <a
                href="https://wa.me/5551996090597?text=Olá,%20estou%20vindo%20do%20www.ohanasushi.com.br%20e%20quero%20fazer%20um%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '22px',
                  fontWeight: 600,
                  paddingBottom: '2px',
                }}
              >
                Whatsapp
              </a>
            </Flex>
          </WhatsappButton>
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
    </PreviewStatusContainer>
  );
};

export default PreviewStatus;
