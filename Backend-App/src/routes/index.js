const express = require ('express');
const rootRoute = express.Router();
const codeRoute = require('./codeRoute');

rootRoute.use("/code", codeRoute);
module.exports = rootRoute;