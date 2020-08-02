const axios = require('axios');
const parserxml = require('xml2json');
const { correiosUrl } = require('./configs/setup');
const xmlBuilder = require('./service/correios-service');
const db = require('./database/db-config');

const sendXml = async () => {

  const xml = xmlBuilder();
  const responseJson = parserxml.toJson(await xml);
  
  const cep = responseJson
  .split('"cep":"')[1]
  .split('"')[0];

  axios
    .post(correiosUrl.correioSoapAction, await xml, {
      headers: { 'Content-Type': 'text/xml;charset=UTF-8' },
    
    }).then(async ({ data }) => {

      const responseJson = parserxml.toJson(data);
      const responseObject = JSON.parse(responseJson);

      const updateDatabase = 
        responseObject[
          'soap:Envelope'][
          'soap:Body'][
          'ns2:consultaCEPResponse'][
          'return'
        ];
                  
        updateDatabase['status'] = '1';

      await db('andress').update(updateDatabase).where('cep', cep);
      console.log(updateDatabase);
        
    }).catch(async (err) => {

      await db('andress').update({status: 2}).where('cep', cep);
      console.error(err);

    });
};


setInterval(() => {
  sendXml();
}, 5000);
