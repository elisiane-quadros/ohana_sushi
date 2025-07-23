import { Form, Input } from 'antd';
import ButtonLink from '@/components/ButtonLink';
import ButtonPrimary from '@/components/ButtonPrimary';
import { useAppDispatch } from '@/hooks/redux';
import { CartInterface } from '@/interfaces/CartInterface';
import { CartItemList } from '@/interfaces/CartItemList';
import { setCart } from '@/store/features/cart';
import { Flex } from 'antd';
import { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';
import './styles.css';

interface ObservationContentCollapseProps {
  cart: CartInterface | null;
  currentProductInCart: CartItemList | null;
  onCurrentActiveKey: Dispatch<SetStateAction<string[]>>;
  isActive?: boolean; // Nova prop para saber se o collapse está aberto
}

const ObservationContentCollapse = ({
  cart,
  currentProductInCart,
  onCurrentActiveKey,
  isActive = false,
}: ObservationContentCollapseProps) => {
  const dispatch = useAppDispatch();
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const textAreaRef = useRef<any>(null);

  const [hasItem, setHasItem] = useState(
    (currentProductInCart?.observation?.length || 0) > 0,
  );

  // Foca no TextArea quando o collapse é aberto
  useEffect(() => {
    if (isActive && textAreaRef.current) {
      setTimeout(() => {
        textAreaRef.current.focus();
        // Posiciona o cursor no final do texto
        const textArea = textAreaRef.current.resizableTextArea?.textArea;
        if (textArea) {
          const textLength = textArea.value.length;
          textArea.setSelectionRange(textLength, textLength);
        }
      }, 100); // Pequeno delay para garantir que o elemento esteja renderizado
    }
  }, [isActive]);

  const handleFinish = (values: { observation: string }) => {
    if (cart && currentProductInCart) {
      const updatedCartItem = {
        ...currentProductInCart,
        observation: values.observation,
      };
      const updatedCartItemList = cart.cartItemList.map((cil) =>
        cil.id === currentProductInCart.id ? updatedCartItem : cil,
      );
      const updatedCart: CartInterface = {
        ...cart,
        cartItemList: updatedCartItemList,
      };
      dispatch(setCart(updatedCart));
      onCurrentActiveKey([]);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    handleFinish({ observation: '' });
    form.setFieldsValue({ observation: '' });
    setHasItem(false);
    onCurrentActiveKey([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      form.submit();
    }
  };

  const handleValuesChange = (changedValues: any, allValues: any) => {
    const observationText = allValues.observation || '';
    setHasItem(observationText.trim().length > 0);
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      onValuesChange={handleValuesChange}
      initialValues={{ observation: currentProductInCart?.observation || '' }}
      style={{ position: 'relative', minWidth: '224px' }}
    >
      <Form.Item
        name="observation"
        style={{ marginBottom: 0 }}
        rules={[
          {
            max: 500,
            message: 'Máximo 500 caracteres',
          },
        ]}
      >
        <TextArea
          ref={textAreaRef}
          className="observation-text-area"
          placeholder="Digite sua observação..."
          maxLength={500}
          rows={2}
          onKeyDown={handleKeyDown}
          style={{
            resize: 'none',
            overflow: 'auto',
            minHeight: '64px',
            maxHeight: '64px',
            lineHeight: '1.5',
          }}
        />
      </Form.Item>
      <Flex
        vertical
        justify="center"
        align="center"
        gap={8}
        style={{
          position: 'absolute',
          right: '20px',
          top: '4px',
          paddingLeft: '8px',
        }}
      >
        {hasItem || currentProductInCart?.observation?.length ? (
          <>
            <ButtonLink
              onClick={handleCancel}
              style={{ color: '#d81616', lineHeight: 1 }}
            >
              {currentProductInCart?.observation?.length ? 'Excluir' : 'Limpar'}
            </ButtonLink>
            <ButtonPrimary
              htmlType="submit"
              style={{
                fontSize: '0.875rem',
                height: '22px',
                padding: '0 0.75rem',
                width: '64px',
              }}
            >
              {currentProductInCart?.observation?.length ? 'Salvar' : 'Adic.'}
            </ButtonPrimary>
          </>
        ) : null}
      </Flex>
    </Form>
  );
};

export default ObservationContentCollapse;
