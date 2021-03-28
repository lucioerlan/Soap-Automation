exports.up = (knex) => {
  return knex.schema.createTable('andress', (table) => {
    table.increments('id');
    table.string('bairro');
    table.string('cep').notNullable();
    table.string('cidade');
    table.string('complemento2');
    table.string('uf');
    table.string('end');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('andress');
};
