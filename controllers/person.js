
const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Person = require("../models/person")

//get all persons
router.get('/', async (req, res) => {
    const person = await Person.find({})
    res.json({
        status: 200,
        data: person
    })
})

//get person by name
router.get('/:name', async (req,res) => {
    const person = await Person.find({name: req.params.name})
    res.json({
        status: 200,
        data: person
    })
})

//create one person
router.post('/', async (req,res) => {
    const person = await Person.create(req.body)
    res.json({
        status: 200,
        data: person
    })
})

//edit person by name
router.put('/:name', async (req,res) => {
    const person = await Person.findOneAndUpdate({name: req.params.name}, req.body, {new:true})
    res.json({
        status: 200,
        message: "item updated",
        data: person,
      });
})

//delete person by name
router.delete('/:name', async (req,res) => {
    const person = await Person.findOneAndDelete({name: req.params.name})
    res.json({
        status: 200,
        message: "item deleted",
        data: person
})
})

module.exports = router;
