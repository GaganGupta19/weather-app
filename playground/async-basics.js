console.log('Starting async basics');

setTimeout(() => {
    console.log('Inside set time out');
}, 2000);

setTimeout(() => {
    console.log('Inside set time out 1');
}, 0);

setTimeout(() => {
    console.log('Inside set time out 2');
}, 0);

setTimeout(() => {
    console.log('Inside set time out 3');
}, 0);

console.log('Finishing app');