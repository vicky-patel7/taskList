const mongoose = require('mongoose');
const List = require('../models/list');

// view all the list items in the db
const viewlists = async (req, res) => {
    let listData;
    try {
        listData = await List.find();
    } catch (err) {
        console.log(err);
    }
    res.status(200).send(listData);
}

// add a new item in the list
const addNewList = async (req, res) => {
    const newList = new List({ ...req.body });
    try {
        const result = await newList.save();
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
}

// update an existing item in the list
const updateList = async (req, res) => {
    try {
        const updatedList = await List.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).send(updatedList);
    } catch (err) {
        console.log(err);
    }
}

// delete an existing item from the list
const deleteList = async (req, res) => {
    try {
        const result = await List.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { viewlists, addNewList, updateList, deleteList };