const request = require('request');

let findLocation = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBYCZPuFhWfCsMXpHtf-MK3r1KagFS5v6E`,
        json: true
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to google servers', undefined);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the address', undefined);
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
        //console.log(JSON.stringify(body, undefined, 1));
    });
};

module.exports = {
    findLocation
};