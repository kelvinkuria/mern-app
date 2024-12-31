const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // Simplified options
  .then(() => console.log('MongoDB database established successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

  const exercisesRouter = require('./routes/exercises')
  const usersRouter = require("./routes/users")

  app.use('/exercises',exercisesRouter);
  app.use('/users',usersRouter);

// Server start
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
