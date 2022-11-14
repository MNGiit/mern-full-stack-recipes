const mongoose= require('mongoose'); // Import Mongoose
const bcrypt = require('bcryptjs'); // Import Bcrypt

// Use Mongoose to create userSchema
const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: [true, 'User must have a name']},
        email: {type: String, trim: true, unique: true, lowercase: true, required: [true, 'User must have email']},
        password: {type: String, trim: true, minLength: [3, 'Password must be at least 3 characters'], required: [true, 'Password is a required field'], select: false},
    },
    {
        timestamps: true,
        toObject: {virtuals: true},
        toJSON: {virtuals: true},
    }
);

// Use a document middleware to encrypt password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        // Continue
        next();
        // Return early
        return;
    }

    // Encrypt password
    this.password = await bcrypt.hash(this.password, 12);
    // Call next middleware in the stack
    next();
});

// Create an instance method that will compare passwords uing bcryptjs
userSchema.methods.comparePassword = async function (plainText, hashedPassword) {
    return await bcrypt.compare(plainText, hashedPassword);
}

// Create user model using mongoose and schema
const User = mongoose.model('User', userSchema);
// Export model to be used in other parts of application
module.exports = User;