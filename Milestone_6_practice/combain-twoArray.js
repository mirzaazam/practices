

const arrowFunction = (arr1, arr2) => {
    const arr3 = [0, ...arr1, ...arr2, 9];
    const max = Math.max(...arr3);
    console.log("Combaine array: ",arr3);
    return max;
}


const arr = [1, 3, 5, 3];
const arr2 = [4, 6, 7, 4];
console.log('first array: ',arr);
console.log('second array: ',arr2);

const max = arrowFunction(arr, arr2);
console.log('max number of array: ',max);