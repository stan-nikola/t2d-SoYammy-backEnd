const { model, Schema, default: mongoose, SchemaTypes } = require("mongoose");

const recipeSchema = Schema(
  {
    title: { type: String, required: [true, "Title required "] },
    category: {
      enum: [
        "Beef",
        "Breakfast",
        "Chicken",
        "Dessert",
        "Goat",
        "Lamb",
        "Miscellaneous",
        "Pasta",
        "Pork",
        "Seafood",
        "Side",
        "Starter",
        "Vegan",
      ],
      type: String,
      required: [true, "category required "],
    },
    area: { type: String },
    instructions: { type: String, required: [true, "instructions required "] },
    description: { type: String },
    thumb: { type: String },
    preview: { type: String },
    time: { type: Number, required: [true, "time required "] },
    youtube: { type: String },
    tags: { type: Array },
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
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipe = model("recipe", recipeSchema);

module.exports = { Recipe };
