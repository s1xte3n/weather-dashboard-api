// create a controller for handling the logic
const axios = require('axios');
const Weather = require('../models/Weather');

exports.getWeather = async (req, res) => {
    const city = req.params.city;
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const { temp } = response.data.main;
        const { description } = response.data.weather[0];

        const weatherData = new Weather({
            city, 
            temperature: temp,
            description
        });

        await weatherData.save();

        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};