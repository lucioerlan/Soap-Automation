const db = require('../../src/database/db-config');

describe('Knex Migrate, Seeds, Query', () => {
  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });
  /* afterEach(() => {
     return db.migrate.rollback();
  });  */
  it('if cep exists table', (done) => {
    done();
  });
  afterEach((done) => {
    db('andress').select('cep').then(() => done());
  });
});
