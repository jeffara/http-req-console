const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");
const axios = require("axios").default;
const bodyParser = require('body-parser');
const app = express();

require("dotenv").config();

app.use(morgan("combined"));
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/req-debug', function (req, res) {

    console.log("[Req Debug] URL da Request:")
    console.log(req.originalUrl); // Retorna a URL original da solicitação
    console.log(req.url); // Retorna a URL da solicitação

    req.sendStatus(200);
});

app.listen(3000, () => {
    console.log('[Req Debug] Webhook Hotmart e ClickMagick em execução através da porta 3000!');
});
