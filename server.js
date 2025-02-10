const express = require('express');

const morgan = require('morgan')
 
const cors = require('cors')

const dotenv = require('dotenv').config({path:'./config/.env'});

const connectDb = require('./config/db')


connectDb()

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.json())
console.log('MONGO_URI:', process.env.MONGO_URI);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
};
app.use('/api/books',require('./routes/bookRoutes'));
app.listen(port, () => console.log('Server Started On Port ' + port))