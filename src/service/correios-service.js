const xmlbuilder = require('xmlbuilder');
const { getNumberCep } = require('../models/correios.models');
require('colors');

module.exports = async () => {

  const rows = await getNumberCep(); 
                 
  if(!rows.length){ 
    console.log('all ceps were consulted!');
    process.exit(); 
  }

  for (let row of rows) {

    let soapEnvelopeObj = {
      'soapenv:Envelope': {
        '@xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
        '@xmlns:cli': 'http://cliente.bean.master.sigep.bsb.correios.com.br/',
        'soapenv:Header': {},
        'soapenv:Body': {
          'cli:consultaCEP': {
            cep: row['cep'],
          }
        }
      }
    };

    const xml = xmlbuilder
      .create(soapEnvelopeObj, { headless: true })
      .end({ pretty: true });
     
    console.log(`${xml}`.yellow);

    return xml;
  }
};
