if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://admin:admin123@cluster0.94glo.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connection.on('error', (error) => {
    console.log('Database connection error: ' + error)
})
mongoose.connection.once('connected', () => {
    console.log('Database Connected');
})