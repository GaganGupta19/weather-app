const request = require('request');
const yargs = require('yargs');

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

request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBYCZPuFhWfCsMXpHtf-MK3r1KagFS5v6E`,
    json: true
}, (error, response, body) => {
    if (error){
        console.log('Unable to connect to google servers');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find the address');
    }else if(body.status === 'OK'){
        console.log(body.results[0].formatted_address);
        console.log(body.results[0].geometry.location.lat);
        console.log(body.results[0].geometry.location.lng);
    }
    //console.log(JSON.stringify(body, undefined, 1));
});