const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const OriginCountries = new Schema(
    {
        country: String,
    },
    {timestamps: true}
)

module.exports = mongoose.model("recipes", OriginCountries)