const request = require('request');
let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBYCZPuFhWfCsMXpHtf-MK3r1KagFS5v6E`,
            json: true
        }, (error, response, body) => {
            if (error){
                reject('Unable to connect to google servers');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the address');
            } else if(body.status === 'OK'){
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('00000').then((message) => {
    console.log(message);
}, (errorMessage) => {
    console.log(errorMessage);
});

// module.exports = {
//     findLocation
// };