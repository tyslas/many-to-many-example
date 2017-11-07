exports.up = function(knex, Promise) {
    return knex.schema.createTable('movie', (table) => {
      table.increments();
      table.string('title').unique().notNullable();
    });
  };

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('movie');
};
