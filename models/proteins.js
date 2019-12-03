const mongoose = require('mongoose');

const ProteinSchema = new mongoose.Schema({
  "Entry": String,
  "EntryName": String,
  "ProteinNames": String,
  "GeneNames": String,
  "Organism": String,
  "EC": Array,
  "GO": Array,
  "InterPro": Array
});

const Protein = mongoose.model('Protein', ProteinSchema);

module.exports = Protein;
