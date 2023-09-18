const express = require('express');
const router = express.Router();
const {addNewList, updateList, deleteList, viewlists} = require('../controllers/crude');

// view all the added lists
router.get('/', viewlists);

// add a new list to db
router.post('/', addNewList);

// update the existing list
router.put('/:id', updateList);

// delete the existing list from db
router.delete('/:id', deleteList);

module.exports = router;