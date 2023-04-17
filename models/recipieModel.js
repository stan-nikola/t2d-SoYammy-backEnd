const { boolean } = require("joi");
const { Schema, model } = require("mongoose");

const { categories } = require("../helpers");

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "Title is required"],
    },
    category: {
      type: String,
      enum: [...categories],
      require: [true, "Category is required"],
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
      require: [true, "Instructions is required"],
    },
    description: {
      type: String,
      require: [true, "Description is required"],
    },
    thumb: { type: String, require: true },
    preview: { type: String, require: true },
    time: { type: String, require: [true, "Time is required"] },
    youtube: { type: String },
    tags: { type: [String] },
    ingredients: {
      type: Array,
      default: [],
    },
    popularity: {
      type: String,
      default: 0,
    },
    favorites: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipe = model("recipe", recipeSchema);

module.exports = Recipe;
