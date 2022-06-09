const mongoose = require("mongoose");
const originalCountries = require("./originalCountries");

const Schema = mongoose.Schema;

const LambRecipe = new Schema(
    {
        title: String,
        country: { $ref: Schema/originalCountries },
        ingredient: [String],
        image: String,
    },
    {timestamps: true}
)

module.exports = mongoose.model("recipes", LambRecipe)