const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Start App
const app =  express();
app.use(express.json());
app.use(cors());

// Start DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeApi',
 {useNewUrlParser: true});

 require('./src/models/Product');

// Routes
app.use('/api', require('./src/routes.js'));

app.listen(3001);
