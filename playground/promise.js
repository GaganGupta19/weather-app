let asynAdd = (a, b) => {
    return new Promise((resolve, reject) => {
       if(a > b){
           resolve('success');
       }else{
           reject('error');
       }
    });
};

asynAdd(5, 10).then((message) => {
    console.log(message);
}, (errorMessage) => {
   console.log(errorMessage);
});

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