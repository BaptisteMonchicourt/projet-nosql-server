const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');

// Create a session
app.use(session({
  secret: 'rhurihze5465szr4g53168a4q6s84f8684dfg',
  saveUninitialized: false,
  resave: false
}));

// Connect to MongoDB
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/projet-nosql').then(() => console.log('Mongoose up'));

const Message = require('./models/messages');
const Protein = require('./models/proteins');

// Use JSON to communicate
app.use(bodyParser.json());


// ************************************************************************
// Get proteins according to entry name
app.get('/api/data-from-name', async (req, res) => {
  const entryName = req.query.EntryName;
  const limit = parseInt(req.query.limit, 10);
  const myData = await Protein.find({"EntryName": {$regex : entryName, $options: 'i'}}).limit(limit);
  res.json({
    success: true,
    data: myData
  });
})
// ************************************************************************


// ************************************************************************
// Get proteins according to entry
app.get('/api/data-from-entry', async (req, res) => {
  const entry = req.query.Entry;
  const limit = parseInt(req.query.limit, 10);
  const myData = await Protein.find({"Entry": {$regex : entry, $options: 'i'}}).limit(limit);
  res.json({
    success: true,
    data: myData
  });
})
// ************************************************************************


// ************************************************************************
// Get proteins according to keywords
app.get('/api/data-from-keywords', async (req, res) => {
  const keywords = req.query.Keywords;
  const limit = parseInt(req.query.limit, 10);
  const myData = await Protein.find({"Keywords": {$regex : keywords, $options: 'i'}}).limit(limit);
  res.json({
    success: true,
    data: myData
  });
})
// ************************************************************************


// ************************************************************************
// Get proteins according to protein names
app.get('/api/data-from-protein-names', async (req, res) => {
  const proteinNames = req.query.ProteinNames;
  const limit = parseInt(req.query.limit, 10);
  const myData = await Protein.find({"ProteinNames": {$regex : proteinNames, $options: 'i'}}).limit(limit);
  res.json({
    success: true,
    data: myData
  });
})
// ************************************************************************


// ************************************************************************
// Get proteins according to gene names
app.get('/api/data-from-gene-names', async (req, res) => {
  const geneNames = req.query.GeneNames;
  const limit = parseInt(req.query.limit, 10);
  const myData = await Protein.find({"GeneNames": {$regex : geneNames, $options: 'i'}}).limit(limit);
  res.json({
    success: true,
    data: myData
  });
})
// ************************************************************************


// ************************************************************************
// Get proteins according to organism
app.get('/api/data-from-organism', async (req, res) => {
  const organism = req.query.Organism;
  const limit = parseInt(req.query.limit, 10);
  const myData = await Protein.find({"Organism": {$regex : organism, $options: 'i'}}).limit(limit);
  res.json({
    success: true,
    data: myData
  });
})
// ************************************************************************


// ************************************************************************
// Get proteins according to organism
app.get('/api/data-from-advanced', async (req, res) => {
  const limit = parseInt(req.query.limit, 10);
  var array = []
  if (req.query.EntryName) {
    array.push({"EntryName": {$regex : req.query.EntryName, $options: 'i'}});
  }
  if (req.query.Entry) {
    array.push({"Entry": {$regex : req.query.Entry, $options: 'i'}});
  }
  if (req.query.Keywords) {
    array.push({"Keywords": {$regex : req.query.Keywords, $options: 'i'}});
  }
  if (req.query.ProteinNames) {
    array.push({"ProteinNames": {$regex : req.query.ProteinNames, $options: 'i'}});
  }
  if (req.query.GeneNames) {
    array.push({"GeneNames": {$regex : req.query.GeneNames, $options: 'i'}});
  }
  if (req.query.Organism) {
    array.push({"Organism": {$regex : req.query.Organism, $options: 'i'}});
  }
  const myData = await Protein.find({$and: array}).limit(limit);
  res.json({
    success: true,
    data: myData
  });
})
// ************************************************************************


// Server listening
app.listen(1234, () => console.log('Server listening at 1234'));
