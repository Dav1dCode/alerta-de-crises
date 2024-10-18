import React from 'react';
import AlertasList from './AlertasList';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>Alertas de Crises</h1>
                <p>Mantenha-se informado sobre as últimas emergências e crises.</p>
            </header>

            <section className="alertas-section">
                <h2>Últimos Alertas</h2>
                <AlertasList />
            </section>

            <section className="feedback-section">
                <h2>Deixe seu Feedback</h2>
                <form>
                    <input type="text" placeholder="Seu Nome" required />
                    <textarea placeholder="Sua Mensagem" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Alerta de Crises. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
