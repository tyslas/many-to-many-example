
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actor_movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('actor_movie').insert([
        {actor_id: 1, movie_id: 1},
        {actor_id: 2, movie_id: 2},
        {actor_id: 3, movie_id: 3},
        {actor_id: 3, movie_id: 1}
      ]);
    });
};
