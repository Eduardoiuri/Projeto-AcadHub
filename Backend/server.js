
const express = require('express');


const app = express();


const PORT = process.env.PORT || 4000;


app.use(express.json());


app.get('/api/ping', (req, res) => {
    res.json({ pong: true });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
