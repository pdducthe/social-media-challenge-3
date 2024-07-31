const express = require('express');

const codeRoute = express.Router();
const {getUserList} = require('../controllers/codeController');

//GET USER LIST
codeRoute.get("/getUserList", getUserList);

module.exports = codeRoute;