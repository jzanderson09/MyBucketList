
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          firstName: 'Jacob',
          lastName: 'Anderson',
          username: 'jzanderson09',
          password: 'password123',
          email: 'jzanderson09@gmail.com'
        },
        {
          firstName: 'Bonnie',
          lastName: 'Olson',
          username: 'bonnie601',
          password: 'simon601',
          email: 'bonnie601@yahoo.com'
        },
        {
          firstName: 'test',
          lastName: 'account',
          username: 'testAccount',
          password: 'test123',
          email: 'testAccount@gmail.com'
        }
      ]);
    });
};
