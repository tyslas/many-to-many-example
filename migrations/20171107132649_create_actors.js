exports.up = function(knex, Promise) {
  return knex.schema.createTable('actor', (table) => {
        table.increments();
        table.string('name').unique().notNullable();
      });
  };

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('actor');
};
