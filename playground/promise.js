let somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hey! it worked');
        reject('Unable to fulfil promise.');
    }, 2500);

});

somePromise.then((message) => {
    console.log('success', message);
}, (errorMessage) => {
    console.log('Error Message: ', errorMessage);
});