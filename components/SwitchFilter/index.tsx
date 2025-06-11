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
  console.log('1');

  return (
    <Flex
      align="center"
      justify="space-between"
      gap={8}
      style={{
        borderRadius: '4px',
        padding: '8px 16px',
        border: '1px solid #d9d9d9',
        boxShadow: '2px 2px 4px #d8161630',
        background: '#fff',
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
