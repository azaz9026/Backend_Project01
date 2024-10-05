const express = require("express");
const routes = express.Router();



routes.get('/', (req, res) => {
    res.send('Product Routes');
});

module.exports = routes;