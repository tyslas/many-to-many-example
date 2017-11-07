
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actor').del()
    .then(function () {
      // Inserts seed entries
      return knex('actor').insert([
        {name: 'Harrison Ford'},
        {name: 'Viola Davis'},
        {name: 'Oscar Isaac'}
      ]);
    });
};
