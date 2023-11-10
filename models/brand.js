const mongoose = require("mongoose")
const brandSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
})
module.exports = mongoose.model("brand",
    brandSchema)