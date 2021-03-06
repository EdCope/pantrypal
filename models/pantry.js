const mongoose = require("mongoose");

const PantrySchema = new mongoose.Schema({
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
})

const Pantry = mongoose.model("Pantry", PantrySchema);

module.exports = Pantry