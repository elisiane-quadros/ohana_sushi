import { Flex, Typography } from 'antd';
import { ChangeEvent, useState } from 'react';
import { AddressFormContainer } from './styles';
import Icon from '@mdi/react';
import { mdiMapMarkerRadiusOutline } from '@mdi/js';
import InputForm from '@/components/InputForm';

const AddressForm = () => {
  const { Title } = Typography;

  const [streetName, setStreetName] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [reference, setReference] = useState('');

  const handleStreetName = (event: ChangeEvent<HTMLInputElement>) => {
    const newStreetName = event.target.value;
    setStreetName(newStreetName);
  };

  const handleNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = event.target.value;
    setNumber(newNumber);
  };

  const handleComplement = (event: ChangeEvent<HTMLInputElement>) => {
    const newComplement = event.target.value;
    setComplement(newComplement);
  };

  const handleNeighborhood = (event: ChangeEvent<HTMLInputElement>) => {
    const newNeighborhood = event.target.value;
    setNeighborhood(newNeighborhood);
  };

  const handleCity = (event: ChangeEvent<HTMLInputElement>) => {
    const newCity = event.target.value;
    setCity(newCity);
  };

  const handleReference = (event: ChangeEvent<HTMLInputElement>) => {
    const newReference = event.target.value;
    setReference(newReference);
  };

  return (
    <AddressFormContainer gap={8} vertical>
      <Flex align="center" gap={8}>
        <Icon path={mdiMapMarkerRadiusOutline} size={1} color="#d81616" />
        <Title level={5} style={{ marginBottom: 0 }}>
          Endereço:
        </Title>
      </Flex>
      <Flex vertical gap={2}>
        <InputForm
          label="Logradouro (rua/avenida...) *"
          value={streetName}
          onChange={handleStreetName}
          errorMessage="Logradouro é obrigatório"
        />
        <Flex gap={8} style={{ width: '100%' }}>
          <InputForm
            label="Número *"
            value={number}
            onChange={handleNumber}
            errorMessage="Número é obrigatório"
            containerProps={{ flex: 1 }}
          />
          <InputForm
            label="Complemento"
            value={complement}
            onChange={handleComplement}
            containerProps={{ flex: 1 }}
          />
          <InputForm
            label="Bairro*"
            value={neighborhood}
            onChange={handleNeighborhood}
            errorMessage="Bairro é obrigatório"
            containerProps={{ flex: 2 }}
          />
        </Flex>
        <Flex gap={8} style={{ width: '100%' }}>
          <InputForm
            label="Cidade *"
            value={city}
            onChange={handleCity}
            errorMessage="Cidade é obrigatória"
            containerProps={{ flex: 1 }}
          />
          <InputForm
            label="Ponto de referência"
            value={reference}
            onChange={handleReference}
            containerProps={{ flex: 2 }}
          />
        </Flex>
      </Flex>
    </AddressFormContainer>
  );
};

export default AddressForm;
