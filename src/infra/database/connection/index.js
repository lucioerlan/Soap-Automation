const connectionDB = require('./db-config');

module.exports = require('knex')(connectionDB);
