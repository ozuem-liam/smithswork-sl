const express = require('express');
const app = express();
const routes = require('./route/index');

const PORT = 8080 || process.env.PORT;

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get('/', (req, res) => {
    res.send("Healthy");
})

module.exports = app;