const { join } = require('path');
require('dotenv').config();
require('dotenv').config({ path: join('../../../../.env') });

// client: 'pg' 'postgresql'-- production development
const connectionDB = {
    development: {
        client: 'pg',
        connection: {
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE
        },
        options: {
            encrypt: true,
            enableArithAbort: true
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: '../migrations'
        },
        seeds: {
            directory: '../seeds'
        }
    }
};

const environment = process.env.NODE_ENV || 'development';
const config = connectionDB[environment];

module.exports = config;
