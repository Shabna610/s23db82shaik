const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    name: String,
    price: {
        type: Number,
        max: 2000, // Set your maximum allowed value
        validate: {
            validator: function(value) {
                return value <= 2000;
            },
            message: 'Price cannot exceed 2000',
        },
    },
    description: String,
});

module.exports = mongoose.model("brand", brandSchema);
