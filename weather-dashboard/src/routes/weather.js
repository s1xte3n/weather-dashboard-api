// #3 Create Routes and Controllers
// create a route for fetching weather data
const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const { default: mongoose } = require('mongoose');

router.get('/:city', weatherController.getWeather);

module.exports = router;