
exports.up = function(knex) {
    return knex.schema.createTable('meter', function (table) {
        table.increments();
        table.string('cpf').notNullable();
        table.string('megabyte').notNullable();
        table.string('hour').notNullable();
        table.string('date').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('meter');
};
