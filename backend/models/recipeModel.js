const mongoose= require('mongoose'); // Import Mongoose

// Use Mongoose to create recipeSchema
const recipeSchema = new mongoose.Schema(
    {
        name: {type: String, required: [true, 'Recipe must have a name']},
        img: {type: String},
        ingredients: [{
            name: {type: String},
            quantity: {type: String}
        }]
    },
    {
        timestamps: true,
        toObject: {virtuals: true},
        toJSON: {virtuals: true},
    }
);

// Create recipe model using mongoose and schema
const Recipe = mongoose.model('Recipe', recipeSchema);
// Export model to be used in other parts of application
module.exports = Recipe;
