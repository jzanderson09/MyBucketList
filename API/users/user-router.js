const express = require('express');

const cors = require('cors');

const UserMethods = require('./user-model.js');

const router = express.Router();

router.use(cors());

/*----------------CREATE--------------*/

// Adds user added to the db:
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        const userAdded = await UserMethods.addUser(newUser);
        res.status(201).json({ userAdded: 'Success!' });
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to add user!' });
    }
});

/*----------------READ----------------*/

// Returns users found in the db:
router.get('/', async (req, res) => {
    try {
        const users = await UserMethods.findUsers();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to get users!' });
    }
});

// Returns user specified by id in the db:
router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await UserMethods.findUserById(id);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to get user!' });
    }
});

/*----------------UPDATE--------------*/

// Updates user specified by id:
router.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const userUpdating = req.body;
        const updatedUser = await UserMethods.updateUser(userUpdating, id);
        res.status(204).json(updatedUser);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to update user!' });
    }
});

/*----------------DELETE--------------*/

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await UserMethods.deleteUser(id);
        res.status(204).json(deletedUser);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to delete user!' });
    }
});

module.exports = router;