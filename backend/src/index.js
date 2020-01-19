const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const config = require('../resources/config.js');
const routes = require('./routes');

const app = express();

mongoose.connect(config.dev.db.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// app.use(cors({ origin: 'https://localhost:3000' }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
