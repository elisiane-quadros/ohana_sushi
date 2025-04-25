import { Flex, Typography } from 'antd';
import { ErrorMessage, StyledInput } from './styles';
import { ChangeEventHandler, ReactNode } from 'react';

interface InputFormProps {
  label?: string;
  value?: string | number;
  maxLength?: number;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  showErrorMessage?: boolean;
  props?: {};
  containerProps?: {};
  labelProps?: {};
  errorMessageProps?: {};
  suffix?: ReactNode;
  redStyled?: boolean;
  allowClear?:
    | boolean
    | {
        clearIcon?: ReactNode;
      }
    | undefined;
}

const InputForm = ({
  label,
  value,
  maxLength,
  placeholder,
  onChange,
  errorMessage = '',
  showErrorMessage = false,
  props = {},
  containerProps = {},
  labelProps = {},
  errorMessageProps = {},
  suffix,
  redStyled = false,
  allowClear,
}: InputFormProps) => {
  const { Text } = Typography;

  return (
    <Flex vertical style={{ width: '100%' }} {...containerProps}>
      <Text strong {...labelProps}>
        {label}
      </Text>
      <StyledInput
        size="large"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        suffix={suffix}
        redStyled={redStyled}
        allowClear={allowClear}
        {...props}
      />
      {showErrorMessage && errorMessage ? (
        <ErrorMessage {...errorMessageProps}>{errorMessage}</ErrorMessage>
      ) : !showErrorMessage && errorMessage ? (
        <span style={{ width: '100%', height: '18.84px' }} />
      ) : null}
    </Flex>
  );
};

export default InputForm;
