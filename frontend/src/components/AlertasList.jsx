// src/components/AlertasList.jsx
import React, { useEffect, useState } from 'react';
import { fetchAlertas } from '../api'; // Importa a função fetchAlertas do api.js

const AlertasList = () => {
    const [alertas, setAlertas] = useState([]); // Estado para armazenar os alertas
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento

    useEffect(() => {
        const loadAlertas = async () => {
            try {
                const data = await fetchAlertas(); // Chama a função para buscar os alertas
                setAlertas(data); // Atualiza o estado com os alertas recebidos
            } catch (error) {
                console.error('Erro ao buscar alertas:', error);
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        loadAlertas(); // Executa a função de carregamento dos alertas
    }, []); // O array vazio [] indica que o efeito deve rodar apenas uma vez após a montagem do componente

    if (loading) return <div>Carregando...</div>; // Retorna uma mensagem de carregamento enquanto busca os dados

    return (
        <div>
            <h1>Alertas de Crises</h1>
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
