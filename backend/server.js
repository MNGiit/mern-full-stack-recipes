const express = require('express'); // Import Express
const app = express();
const mongoose = require('mongoose'); // Import Mongoose
const dotenv = require('dotenv'); // Import dotenv
const cors = require('cors'); // Import cors
dotenv.config();
const morgan = require('morgan'); // Import morgan
const userRouter = require('./routes/api/users'); // Router
const recipeRouter = require('./routes/api/recipes'); // Router
const PORT = process.env.PORT // Assign PORT from env


// Middleware
app.use(cors());
app.use(morgan('dev')); // Logger
app.use(express.json()); // Body parser

// Router Middleware
app.use("/api/users", userRouter);
app.use("/api/recipes", recipeRouter);

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Connected to mongo');
});


// Server Listener
app.listen(PORT, ()=>{
    console.log('Server listening on ', PORT, '...');
});