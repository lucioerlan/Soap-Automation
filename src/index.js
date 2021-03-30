require('dotenv').config();
const SoapService = require('./service/soap-service');
const { logger } = require('./middlewares');

const soapService = new SoapService();

soapService.on('data', (log) => logger.info(log));

soapService.show();
