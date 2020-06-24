
exports.up = function(knex) {
    return knex.schema.createTable('bill', function (table) {
        table.increments();
        table.string('month').notNullable();
        table.string('year').notNullable();
        table.string('status').notNullable();
        table.string('monthly_consumption').notNullable();
        table.string('monthly_value').notNullable();
        table.string('due_date').notNullable();
        
        table.string('user_id').notNullable();
        table.foreign('user_id').references('id').inTable('user');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('bill');
};
