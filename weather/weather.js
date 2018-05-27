const request = require('request');

const BASE_URL = 'https://api.darksky.net/forecast';
const FORECAST_KEY = 'd4087dc373acca6b0d8ed086e87a80c3';

//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
let getWeather = (lat, lng, callback) => {
    request({
        url: `${BASE_URL}/${FORECAST_KEY}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather.');
        }
    });
};

module.exports.getWeather = getWeather;