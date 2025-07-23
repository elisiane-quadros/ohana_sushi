import useResponsive from '@/hooks/useResponsive';
import { Flex, Switch } from 'antd';

interface SwitchFilterProps {
  label: string;
  selectedProductType: boolean;
  handleProductFilter: () => void;
  loading?: boolean;
  defaultChecked?: boolean;
}

const SwitchFilter = ({
  label,
  selectedProductType,
  handleProductFilter,
  loading = false,
  defaultChecked = false,
}: SwitchFilterProps) => {
  const { isXxl } = useResponsive();
  return (
    <Flex
      align="center"
      justify="space-between"
      gap={8}
      style={{
        borderRadius: isXxl ? '4px' : '0',
        padding: isXxl ? '8px 16px' : '4px',
        border: isXxl ? '1px solid #d9d9d9' : 'none',
        boxShadow: isXxl ? '2px 2px 4px #d8161630' : 'none',
        background: isXxl ? '#fff' : 'transparent',
        cursor: 'pointer',
      }}
      className="showcase-switch"
      onClick={handleProductFilter}
    >
      {label}{' '}
      <Switch
        defaultChecked={defaultChecked}
        size="small"
        value={selectedProductType}
        onChange={() => handleProductFilter()}
        loading={loading}
      />
    </Flex>
  );
};

export default SwitchFilter;
