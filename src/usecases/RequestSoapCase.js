const { xml2json } = require("xml-js");
const { RemoveJsonTextAttribute } = require("../utils/format");
const UpdateQueryCase = require("./UpdateQueryCase");
const api = require("../application/config/setup-soap");

/**
 * The RequestSoapCase Class.
 *
 * @method execute request soap correios
 */

class RequestSoapCase {
    async execute(xml) {
        const res = await api.post("/AtendeCliente", xml);

        const data = xml2json(res.data, {
            compact: true,
            spaces: 4,
            textFn: RemoveJsonTextAttribute
        });

        if (res.status === 200) {
            await UpdateQueryCase.execute(data);
        }
    }
}

module.exports = new RequestSoapCase();
