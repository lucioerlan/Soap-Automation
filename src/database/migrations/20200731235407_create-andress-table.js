exports.up = function(knex) {
  return knex.schema.createTable('andress', function(table) {
    table.increments('id');
    table.string('bairro');
    table.string('cep').notNullable();
    table.string('cidade');
    table.string('complemento2');
    table.string('uf');
    table.string('end');
    table.string('status').defaultTo('0');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('andress');
};