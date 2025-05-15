import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { CartInterface } from '@/interfaces/CartInterface';
import { CartItemList } from '@/interfaces/CartItemList';
import { setCart } from '@/store/features/cart';
import calculateComboTotalItems from '@/utils/calculateComboTotalItems';
import { Alert, Flex, Modal, Typography } from 'antd';
import { useRouter } from 'next/navigation';
import ButtonPrimary from '../ButtonPrimary';
import ButtonLink from '../ButtonLink';

interface RemoveItemModalProps {
  item: CartItemList | null;
  isRemoveItemModalOpen: boolean;
  onIsRemoveItemModalOpen: (isRemoveItemModalOpen: boolean) => void;
}

const RemoveItemModal = ({
  item,
  isRemoveItemModalOpen,
  onIsRemoveItemModalOpen,
}: RemoveItemModalProps) => {
  const dispatch = useAppDispatch();
  const cart: CartInterface | null = useAppSelector((state) => state.cart.cart);
  const { Text } = Typography;
  const router = useRouter();

  const handleCancel = () => {
    onIsRemoveItemModalOpen(false);
  };

  const handleOk = () => {
    let newCartItemList: CartItemList[] = [];
    let newEmptyCart = false;
    if (cart && item) {
      if (cart.cartItemList.length === 1) {
        newEmptyCart = true;
        dispatch(setCart(null));
      } else {
        newCartItemList = cart?.cartItemList.filter(
          (cartItem) => cartItem.id !== item.id,
        );
        const newCart: CartInterface = {
          ...cart,
          value: newEmptyCart ? 0 : cart?.value - item.product.price,
          cartItemList: newCartItemList,
        };

        dispatch(setCart(newCart));
      }

      handleCancel();
      if (newEmptyCart) {
        router.push('/');
      }
    }
  };

  const footer = () => {
    return (
      <Flex justify="flex-end" gap={16}>
        <ButtonLink onClick={handleCancel}>Cancelar</ButtonLink>
        <ButtonPrimary onClick={handleOk}>Excluir</ButtonPrimary>
      </Flex>
    );
  };

  const createAlertMessage = () => {
    return (
      <Flex>
        {cart && cart.cartItemList.length === 1 ? (
          <Flex vertical gap={8}>
            <Text>
              <strong>
                {item ? item.product.title : ''}{' '}
                {calculateComboTotalItems(
                  item ? item.product.ingredientList : [],
                )}{' '}
                {'peças'}
              </strong>{' '}
              {
                'é o último item do carrinho, ao removê-lo você será redirecionado para a página inicial.'
              }
            </Text>
            <Text>
              {'Tem certeza que deseja remover'}{' '}
              <strong>
                {item ? item.product.title : ''}{' '}
                {calculateComboTotalItems(
                  item ? item.product.ingredientList : [],
                )}{' '}
                {'peças'}
              </strong>{' '}
              {'do carrinho?'}
            </Text>
          </Flex>
        ) : (
          <Text>
            {'Tem certeza que deseja remover'}{' '}
            <strong>
              {item ? item.product.title : ''}{' '}
              {calculateComboTotalItems(
                item ? item.product.ingredientList : [],
              )}{' '}
              {'peças'}
            </strong>{' '}
            {'do carrinho?'}
          </Text>
        )}
      </Flex>
    );
  };

  return (
    <Modal
      open={isRemoveItemModalOpen}
      title="Remover item"
      cancelText="Cancelar"
      okText="Remover"
      footer={footer}
    >
      <Alert
        message={createAlertMessage()}
        type="warning"
        showIcon
        banner
        style={{ borderRadius: '4px' }}
      />
    </Modal>
  );
};

export default RemoveItemModal;
