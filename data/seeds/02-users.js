
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_table').insert([

        {
          id: 1
        }

        
      ]);
    });
};
