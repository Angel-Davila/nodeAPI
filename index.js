require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.databaseConnectionString, { useNewUrlParser: true });


const app = express();

app.use(express.json());

app.use('/api', routes);

// Start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
mongoose.connection.on('error', (error) => {
    console.log('Database connection error: ' + error)
})
mongoose.connection.once('connected', () => {
    console.log('Database Connected');
})