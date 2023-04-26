const { model, Schema, default: mongoose } = require("mongoose");

const { categories } = require("../helpers");
const Joi = require("joi");

const joiRecipeSchema = Joi.object({
  title: Joi.string().min(3).max(20).required(),
  category: Joi.string()
    .valid(...categories)
    .required(),
  area: Joi.string(),
  instructions: Joi.array().items(Joi.string().min(3).max(3000)).required(),
  description: Joi.string().min(3).max(3000).required(),
  time: Joi.string().min(1).max(5).required(),
  tags: Joi.array().items(Joi.string()),
  ingredients: Joi.array().items(
    Joi.object().keys({
      id: Joi.string(),
      measure: Joi.string().min(3).max(30).required(),
    })
  ),
}).options({ abortEarly: true });

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
      type: [String],
      require: [true, "Instructions is required"],
    },
    description: {
      type: String,
      require: [true, "Description is required"],
    },
    thumb: { type: String },
    preview: { type: String },
    time: { type: String, require: [true, "Time is required"] },
    youtube: { type: String },
    tags: { type: [String] },
    ingredients: [
      {
        id: {
          type: mongoose.Types.ObjectId,
          ref: "ingredient",
        },
        measure: {
          type: String,
          required: [true, "Measure is required"],
        },
        _id: false,
      },
    ],
    favorites: {
      type: Array,
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);
const Recipe = model("recipe", recipeSchema);

module.exports = { Recipe, joiRecipeSchema };
