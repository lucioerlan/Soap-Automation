const xml = `
<soapenv:Envelope
    xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:cli="http://cliente.bean.master.sigep.bsb.correios.com.br/">
    <soapenv:Header/>
    <soapenv:Body>
        <cli:consultaCEP>
            <cep>79600060</cep>
        </cli:consultaCEP>
    </soapenv:Body>
</soapenv:Envelope>`;

module.exports = xml;
