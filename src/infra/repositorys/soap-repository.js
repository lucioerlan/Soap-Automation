const pg_Conn = require('../database/connection');

module.exports = new class SoapRepository {
    getAddress() {
        return pg_Conn('andress').select('cep');
    }

    updateAddress(address) {
        return pg_Conn('andress').update(address).where('cep', address.cep);
    }
};
