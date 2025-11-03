'use client';

import { useProducts } from '@/hooks/useProducts';
import { Card, Spin, Alert, Button, Flex, Typography } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function ProductsTest() {
  const { products, loading, error, refetch } = useProducts();

  if (loading) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: '200px' }}>
        <Spin size="large" />
        <Text style={{ marginLeft: '16px' }}>
          Carregando produtos da API...
        </Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Alert
        message="Erro ao carregar produtos"
        description={error}
        type="error"
        showIcon
        action={
          <Button size="small" icon={<ReloadOutlined />} onClick={refetch}>
            Tentar novamente
          </Button>
        }
      />
    );
  }

  return (
    <Card title="🗃️ Teste API Products" style={{ margin: '16px' }}>
      <Flex vertical gap={16}>
        <Flex justify="space-between" align="center">
          <Title level={4}>
            ✅ API funcionando! {products.length} produtos carregados
          </Title>
          <Button icon={<ReloadOutlined />} onClick={refetch} type="primary">
            Recarregar
          </Button>
        </Flex>

        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {products.slice(0, 5).map((product) => (
            <Card
              key={product.id}
              size="small"
              style={{ marginBottom: '8px' }}
              title={product.title}
            >
              <Flex justify="space-between">
                <Text>Tipo: {product.type}</Text>
                <Text strong>R$ {product.price.toFixed(2)}</Text>
              </Flex>
              <Text type="secondary">
                {product.ingredientList.length} ingredientes
              </Text>
            </Card>
          ))}
          {products.length > 5 && (
            <Text type="secondary">
              ... e mais {products.length - 5} produtos
            </Text>
          )}
        </div>
      </Flex>
    </Card>
  );
}
