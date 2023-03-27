require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.databaseConnectionStringProd, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
})
mongoose.connection.on('error', (error) => {
    console.log('Database connection error: ' + error)
})
mongoose.connection.once('connected', () => {
    console.log('Database Connected');
})