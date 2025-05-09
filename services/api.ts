import axios from 'axios';

export async function fetchItems() {
  try {
    const response = await axios.get(
      'https://sushi-production-3f30.up.railway.app/product',
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar itens de sushi:', error);
    throw error;
  }
}

export async function getZipCodeService(zipCode: string) {
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json`,
    );
    return response?.data;
  } catch (error: any) {
    return error?.response;
  }
}
