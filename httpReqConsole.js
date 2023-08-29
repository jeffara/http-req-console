const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

require("dotenv").config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/req-debug-sacred-frequencies', function (req, res) {

    const data = new Date();

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são contados a partir de 0, então adicionamos 1
    const ano = data.getFullYear();

    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    const dataFormatada = dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos + ':' + segundos;

    const urlFormatada = req.originalUrl.split('fullURL=')[1];

    console.log("[Req Debug] URL da Request:")
    console.log(`Data: ${dataFormatada} - URL: ${urlFormatada}`);

    res.sendStatus(200);
});

app.get('/req-debug-conecta-moda', function (req, res) {

    const data = new Date();

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Os meses são contados a partir de 0, então adicionamos 1
    const ano = data.getFullYear();

    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    const dataFormatada = dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos + ':' + segundos;

    const urlFormatada = req.originalUrl.split('fullURL=')[1];

    console.log("[Req Debug] URL da Request:")
    console.log(`Data: ${dataFormatada} - URL: ${urlFormatada}`);

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('[Req Debug] Webhook Hotmart e ClickMagick em execução através da porta 3000!');
});
