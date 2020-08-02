const db = require('../database/db-config');

const getNumberCep = async () => {
  return await db.from('andress').select('cep').where('status', 0);
};

module.exports = {
  getNumberCep,
};
