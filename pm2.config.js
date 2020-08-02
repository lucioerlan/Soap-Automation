/* eslint-disable camelcase */
module.exports = {
  apps: [
    {
      name: 'SERVICE_CORREIOS',
      script: './src/index.js',
      autorestart: true,
      instances: 1,
      watch: false,
      exec_mode: 'cluster',
      env_development: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        max_memory_restart: '100M',
      }
    }
  ]
};