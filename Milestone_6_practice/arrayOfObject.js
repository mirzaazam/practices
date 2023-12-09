
//sum of array of object age proparty
const people = [
    {name: 'meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Susorita', age: 22}
];

let sum = 0;
for ( items of people){
    sum += items.age;
}
console.log('All age in object of array:',sum);


//use reduce function.
/*
    n = এই পেরামিটার হচ্ছে যোগ করে সব ভ্যেলু তার মধ্যে রাখার জন্য।
    a = এই পেরামিটারের কাজ হচ্ছে লুপের জন্য যা লুপের i হিসেবে কাজ করবে।
*/
const v = 0;
const reduceUse = people.reduce((n, a) => n + a.age, v);
console.log(reduceUse); 