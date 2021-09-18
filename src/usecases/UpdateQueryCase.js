const SoapRepository = require("../infra/repositorys/soap-repository");

/**
 * The UpdateQueryCase Class.
 *
 * @method UpdateQueryCase update records on postgresql
 */

class UpdateQueryCase {
    async execute(data) {
        const format = JSON.parse(data);

        const res = format
            ["soap:Envelope"]
            ["soap:Body"]
            ["ns2:consultaCEPResponse"]
            .return;

        return SoapRepository.updateAddress(res);
    }
}

module.exports = new UpdateQueryCase();
