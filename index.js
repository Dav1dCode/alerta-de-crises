const express = require('express');
const alertasRouter = require('./routes/alertas');

const app = express();
app.use(express.json());

app.use('/api/alertas', alertasRouter); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
