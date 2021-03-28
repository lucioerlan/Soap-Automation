/* eslint-disable dot-notation */
const { create } = require('xmlbuilder');
const { EventEmitter } = require('events');
const { xml2json } = require('xml-js');
const { RemoveJsonTextAttribute } = require('../utils/formatJson');
const { getAddress, updateAddress } = require('../models/soap-models');
const api = require('../configs/setup');

/**
 * The SoapService Class.
 *
 * @method show mount the xml
 * @method store inserts the xml
 * @method update update table 
 */


class SoapService extends EventEmitter {
  async show() {
    for (const { cep } of await getAddress()) {

      const soapEnvelopeObj = {
        'soapenv:Envelope': {
          '@xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
          '@xmlns:cli': 'http://cliente.bean.master.sigep.bsb.correios.com.br/',
          'soapenv:Header': {},
          'soapenv:Body': {
            'cli:consultaCEP': { cep }},
        }};

      const xml = create(soapEnvelopeObj, { headless: true })
        .end({ pretty: true });

      this.store(xml);
    }
  }


  async store(xml) {
    const res = await api.post('/AtendeCliente', xml);

    const data = xml2json(res.data, {
      compact: true,
      spaces: 4,
      textFn: RemoveJsonTextAttribute,
    });

    if (res.status === 200) await this.update(data);
  }


  async update(data) {
    const format = JSON.parse(data);

    const res = format['soap:Envelope']
      ['soap:Body']
      ['ns2:consultaCEPResponse']
      ['return'];

    await updateAddress(res);

    this.emit('data', res);
  }
}


module.exports = SoapService; 
