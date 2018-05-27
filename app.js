const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.findLocation(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else if(results){
        console.log(JSON.stringify(results, undefined, 1));
        weather.getWeather(results.latitude, results.longitude, (errorMessage, results) => {
            if(errorMessage){
                console.log(errorMessage);
            }else if(results){
                console.log(JSON.stringify(results, undefined, 1));
            }
        });

    }
});