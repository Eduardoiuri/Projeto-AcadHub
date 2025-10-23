// 1. Importar o Express
const express = require('express');

// 2. Criar a instância do App
const app = express();

// 3. Definir a porta (pode vir do .env)
const PORT = process.env.PORT || 4000;

// 4. Middleware: entender JSON
app.use(express.json());

// 5. Rota de Teste
app.get('/api/ping', (req, res) => {
    res.json({ pong: true });
});

// 6. Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
