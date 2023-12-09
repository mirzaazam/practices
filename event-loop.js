
console.log('a');
setTimeout(function rabeya() {
    console.log('after 10 second B');
}, 10000);

console.log('c');

setTimeout(function rabeya() {
    console.log('after 10 second D');
}, 10000);

console.log('e');

console.log('f');