require('dotenv').config();
const SoapService = require('./src/service/soap-service');
const { logger } = require('./src/middlewares');

const soapService = new SoapService();

soapService.on('data', (log) => logger.info(log));

soapService.show();
