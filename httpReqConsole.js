const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const moment = require('moment-timezone');

require("dotenv").config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/req-debug', function (req, res) {

    const dataFormatada = moment().tz("America/Sao_Paulo").format('DD/MM/YYYY HH:mm:ss');

    const urlFormatada = req.originalUrl.split('fullURL=')[1];

    console.log("[Req Debug] URL da Request:")
    console.log(`Data: ${dataFormatada} - URL: ${urlFormatada}`);

    res.sendStatus(200);
});

app.listen(3000, () => {
console.log('[Req Debug] Webhook de Debugging em Execução na Porta 3000!');
});
