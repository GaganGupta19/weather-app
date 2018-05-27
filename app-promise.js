const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            description: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBYCZPuFhWfCsMXpHtf-MK3r1KagFS5v6E`;
const BASE_URL = 'https://api.darksky.net/forecast';
const FORECAST_KEY = 'd4087dc373acca6b0d8ed086e87a80c3';

//calling location api to get lat long
//using axios to chain network calls
axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the address');
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    console.log(response.data.results[0].formatted_address);
    //calling weather api
    let weatherUrl = `${BASE_URL}/${FORECAST_KEY}/${lat},${lng}`;
    return axios.get(weatherUrl);
}).then((response) => {
    let result = {
        temperature: response.data.currently.temperature,
        apparentTemperature: response.data.currently.apparentTemperature
    };
    console.log(JSON.stringify(result, undefined, 1));
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to the server');
    }else {
        console.log(e.message);
    }
});