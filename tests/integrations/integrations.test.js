const request = require('supertest');
const data = require('../fixtures/index.test');

describe('POST /AtendeCliente', () => {
  it('if request returns 200', (done) => {
    request('https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService')
      .post('/AtendeCliente')
      .set('Content-Type', 'application/xml')
      .send(data)
      .expect('Content-Type', /xml/)
      .expect(200, done);
  });
});
