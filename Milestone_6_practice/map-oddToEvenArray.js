
// using map() function;
const arr = [1, 3, 5, 7, 9];
const result = arr.map(a => a + 1);
console.log(result);


// using for loop 
const arrowFuntion = a => {
    const newArr = [];

    for (let i = 0; i < a.length ; i++) {
        const result = a[i] + 1;
        newArr.push(result);
    }
    return newArr;
}

const array = [1, 3, 5, 7, 9];
const newArr = arrowFuntion(array);
console.log(newArr);
