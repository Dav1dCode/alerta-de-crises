import axios from 'axios';

export const fetchAlertas = async () => {
    try {
        const response = await axios.get('/api/alertas'); 
        return response.data; 
    } catch (error) {
        console.error('Erro ao buscar alertas:', error);
        throw error; 
    }
};
