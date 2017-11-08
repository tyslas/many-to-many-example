
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actor').del()
    .then(function () {
      // Inserts seed entries
      return knex('actor').insert([
        {id: 1, name: 'Harrison Ford'},
        {id: 2, name: 'Viola Davis'},
        {id: 3, name: 'Oscar Isaac'}
      ]);
    });
};
