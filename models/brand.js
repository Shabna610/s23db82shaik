const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        // Custom validation function for unique names
        validate: {
            validator: async function(value) {
                const existingBrand = await this.constructor.findOne({ name: value });
                return !existingBrand; // Returns true if the name is unique
            },
            message: 'Brand name must be unique',
        },
    },
    price: {
        type: Number,
        max: 2000, 
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
