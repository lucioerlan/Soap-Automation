const db = require('../database/db-config');

const getAddress = async () => {
  return db('andress').select('cep');
};

const updateAddress = async (res) => {
  return db('andress').update(res).where('cep', res.cep);
};

module.exports = {
  getAddress,
  updateAddress
};

