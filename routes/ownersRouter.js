const express = require("express");
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Owners Routes');
});


module.exports = routes;
