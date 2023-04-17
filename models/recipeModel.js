const { model, Schema } = require("mongoose");

const recipeSchema = Schema({
  title: { type: String },
  category: { type: String },
  area: { type: String },
  instructions: { type: String },
  description: { type: String },
  thumb: { type: String },
  preview: { type: String },
  time: { type: Number },
  youtube: { type: String },
  tags: { type: Array },
  ingredients: [
    {
      id: { type: Schema.ObjectId },
      measure: { type: String },
    },
  ],
});

const Recipe = model("recipe", recipeSchema);

module.exports = { Recipe };
