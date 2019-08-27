const db = require('../data/db-config.js');

/*----------------CREATE--------------*/

// Resolves newUser added to users in the db:
const addUser = newUser => db('users').insert(newUser);

/*----------------READ----------------*/

// Resolves users in the db:
const findUsers = () => db('users');

// Resolves user in the db, specified by id:
const findUserById = id => db('users').where({ id }).first();

/*----------------UPDATE--------------*/

const updateUser = (updatedUser, id) => db('users')
    .where({ id }).update(updatedUser);

/*----------------DELETE--------------*/

const deleteUser = id => db('users').where({ id }).del();

module.exports = {
    findUsers,
    findUserById,
    addUser,
    updateUser,
    deleteUser
};