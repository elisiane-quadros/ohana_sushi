import { Drawer, Flex, Switch } from 'antd';
import { ProductListByType } from '../interfaces/ProductListByType';
import SwitchFilter from '@/components/SwitchFilter';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  selectedProductType: string[];
  handleProductFilter: (e: boolean, productType: ProductType) => void;
  productListByType: ProductListByType[];
  loading?: boolean;
}

const FilterDrawer = ({
  open,
  onClose,
  selectedProductType,
  handleProductFilter,
  productListByType,
  loading,
}: FilterDrawerProps) => {
  console.log('1');

  return (
    <Drawer
      title="Filtros"
      closable={{ 'aria-label': 'Close Button' }}
      onClose={onClose}
      open={open}
      width={280}
    >
      <Flex gap={8} vertical>
        <SwitchFilter
          label="Todos"
          selectedProductType={selectedProductType.includes('ALL')}
          handleProductFilter={() =>
            handleProductFilter(selectedProductType.includes('ALL'), 'ALL')
          }
          loading={loading}
          defaultChecked={true}
        />
        {productListByType.map((productType) => (
          <SwitchFilter
            label={productType.typeName}
            selectedProductType={selectedProductType.includes(productType.type)}
            handleProductFilter={() =>
              handleProductFilter(
                !selectedProductType.includes(productType.type),
                productType.type,
              )
            }
            loading={loading}
          />
        ))}
      </Flex>
    </Drawer>
  );
};

export default FilterDrawer;
