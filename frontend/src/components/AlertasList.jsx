export const fetchAlertas = async () => {
    return [
        {
            id: 1,
            tipo: 'Inundação',
            descricao: 'Inundação severa devido a fortes chuvas na região.',
            data: '2024-10-18',
            local: 'Rio de Janeiro',
            gravidade: 'Alta',
            ativo: true,
        },
        {
            id: 2,
            tipo: 'Terremoto',
            descricao: 'Tremor de terra sentido com magnitude 6.5.',
            data: '2024-10-17',
            local: 'São Paulo',
            gravidade: 'Moderada',
            ativo: false,
        },
        {
            id: 3,
            tipo: 'Deslizamento',
            descricao: 'Deslizamento de terra em área de encosta.',
            data: '2024-10-15',
            local: 'Minas Gerais',
            gravidade: 'Alta',
            ativo: true,
        }
    ];
};
