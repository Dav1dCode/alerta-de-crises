import React, { useEffect, useState } from 'react';
import { fetchAlertas } from '../api';

const AlertasList = () => {
    const [alertas, setAlertas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAlertas = async () => {
            try {
                const data = await fetchAlertas();
                console.log('Dados retornados da API:', data);
                setAlertas(data);
            } catch (error) {
                console.error('Erro ao buscar alertas:', error);
            } finally {
                setLoading(false);
            }
        };

        loadAlertas();
    }, []);

    if (loading) return <div>Carregando...</div>;

    return (
        <div>
            <ul>
                {alertas.map((alerta) => (
                    <li key={alerta.id}>
                        <h2>{alerta.tipo}</h2>
                        <p>{alerta.descricao}</p>
                        <p><strong>Data:</strong> {alerta.data}</p>
                        <p><strong>Local:</strong> {alerta.local}</p>
                        <p><strong>Gravidade:</strong> {alerta.gravidade}</p>
                        <p><strong>Status:</strong> {alerta.ativo ? 'Ativo' : 'Inativo'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertasList;
