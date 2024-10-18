import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchAlertas = async () => {
  const response = await api.get('/alertas');
  return response.data;
};
