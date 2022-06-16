const grocerieContoller = require('express').Router();
const Groceries = require('../models/Groceries.js');


grocerieContoller.get('/', async (req, res) => {
  try {
    const groceries = await Groceries.find();
    res.send(groceries);
  }catch(error){
    res.status(500).send(error);
  }
})

grocerieContoller.post('/create', async (req, res) => {
  console.log(req.body);
  try {
    const grocerie = new Groceries(req.body);
    await grocerie.save();
    res.send(grocerie);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = grocerieContoller;