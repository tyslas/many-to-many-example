exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie').del()
    .then(function () {
      // Inserts seed entries
      return knex('movie').insert([
        {title: 'Star Wars'},
        {title: 'Enders Game'},
        {title: 'Inside Llewyn Davis'}
      ]);
    });
};
