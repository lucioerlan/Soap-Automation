const axios = require('axios');

const api = axios.create({
    baseURL: process.env.WSDL_CORREIOS,
    headers: {
        'Content-Type': process.env.METHOD
    }
});

module.exports = api;
