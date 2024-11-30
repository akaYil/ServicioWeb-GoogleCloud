const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola, Servicio Web de Google Cloud Funcionando');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
