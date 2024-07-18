const express = require("express");
const authController = require("../Controllers/authController");

const route = express.Router();

route.post('/signup' , authController.signup)
route.post('/login' , authController.login)
route.get('/users' , authController.getUsers)

module.exports = route