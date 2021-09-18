const { create } = require("xmlbuilder");
const SoapRepository = require("../infra/repositorys/soap-repository");
const RequestSoapCase = require("./RequestSoapCase");

/**
 * The ReceiveQueryCase Class.
 *
 * @method execute mount the xml
 */

class ReceiveQueryCase {
    async execute() {
        await SoapRepository.getAddress().map(({ cep }) => {
            const soapEnvelopeObj = {
                "soapenv:Envelope": {
                    "@xmlns:soapenv": "http://schemas.xmlsoap.org/soap/envelope/",
                    "@xmlns:cli": "http://cliente.bean.master.sigep.bsb.correios.com.br/",
                    "soapenv:Header": {},
                    "soapenv:Body": {
                        "cli:consultaCEP": { cep }
                    }
                }
            };

            const xml = create(soapEnvelopeObj, { headless: true }).end({
                pretty: true
            });

            RequestSoapCase.execute(xml);
        });
    }
}

module.exports = new ReceiveQueryCase();
