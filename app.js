const express = require('express');
const app = express();
const routes = require('./route/index');
const cors = require('cors');
const mongoSanitize =  require('express-mongo-sanitize');

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
// app.use(xss())
app.use(mongoSanitize());

app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
    res.send("Healthy");
})

module.exports = app;