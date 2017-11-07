exports.up = function(knex, Promise) {
  return knex.schema.createTable('actor_movie', (table) =>{
    table.increments();
    table.integer('actor_id');
    table.integer('movie_id');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('actor_movie');
};
