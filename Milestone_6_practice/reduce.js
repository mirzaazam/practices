
const arrr = [1, 9, 17, 22];
let s = 0;
const reduce = arrr.reduce((sum, ar) => {
    return r = sum + ar, s;
}) 
console.log(r); 


//for loop 
const arr = [1, 9, 17, 22];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log('only for loop result: ', sum);


//fot of loop
const arr2 = [1, 9, 17, 22];
let sum1 = 0;
for (i of arr2) {
    sum1 += i;
}
console.log('for of loop result: ', sum1);
