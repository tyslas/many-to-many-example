exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {id: 1, title: 'Star Wars'},
        {id: 2, title: 'Enders Game'},
        {id: 3, title: 'Inside Llewyn Davis'}
      ]);
    });
};
