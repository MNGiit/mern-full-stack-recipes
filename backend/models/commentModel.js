const mongoose= require('mongoose'); // Import Mongoose

// Use Mongoose to create recipeSchema
const commentSchema = new mongoose.Schema(
    {
        content: {type: String, required: [true, 'Comment must have content']},
        author: {type: String}
    },
    {
        timestamps: true,
        toObject: {virtuals: true},
        toJSON: {virtuals: true},
    }
);

// Create comment model using mongoose and schema
const Comment = mongoose.model('Comment', commentSchema);
// Export model to be used in other parts of application
module.exports = Comment;