import { Flex, Typography } from 'antd';
import { ErrorMessage, StyledInput } from './styles';
import { ChangeEventHandler } from 'react';

interface InputFormProps {
  label: string;
  value: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  showErrorMessage?: boolean;
  containerProps?: {};
  labelProps?: {};
  errorMessageProps?: {};
}

const InputForm = ({
  label,
  value,
  onChange,
  errorMessage = '',
  showErrorMessage = false,
  containerProps = {},
  labelProps = {},
  errorMessageProps = {},
  ...props
}: InputFormProps) => {
  const { Text } = Typography;

  return (
    <Flex vertical style={{ width: '100%' }} {...containerProps}>
      <Text strong {...labelProps}>
        {label}
      </Text>
      <StyledInput size="large" value={value} onChange={onChange} {...props} />
      {showErrorMessage ? (
        <ErrorMessage {...errorMessageProps}>{errorMessage}</ErrorMessage>
      ) : (
        <span style={{ width: '100%', height: '18.84px' }} />
      )}
    </Flex>
  );
};

export default InputForm;
