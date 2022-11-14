const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose
const dotenv = require('dotenv'); // Import dotenv
const cors = require('cors'); // Import cors
dotenv.config();
const morgan = require('morgan'); // Import morgan
const app = express();
const PORT = process.env.PORT // Assign PORT from env


// Middleware
app.use(cors());
app.use(morgan('dev')); // Logger
app.use(express.json()); // Body parser


// Routers
// const userRouter = require('./routes/api/users');

// Router Middleware
// app.use("/api/users", userRouter)

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Connected to mongo');
});


// Server Listener
app.listen(PORT, ()=>{
    console.log('Server listening on ', PORT, '...');
});