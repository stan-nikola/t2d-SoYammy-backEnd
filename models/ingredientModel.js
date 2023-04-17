const { model, Schema } = require("mongoose");

const ingredientSchema = Schema({
  ttl: { type: String },
  desc: {
    type: String,
  },
  t: {
    type: String,
  },
  thb: {
    type: String,
  },
});

const Ingredient = model("ingredient", ingredientSchema);

module.exports = { Ingredient };
