import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/alertas');
        console.log(response.data);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
};

export default fetchData;
