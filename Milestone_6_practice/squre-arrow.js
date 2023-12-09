/*
    write an arrow function where it will do the following : 
     a) squre each array elements
     b) calculate the sum of the squred elements 
     c) return the average of the sum of the squred
*/

const arrowFunction = (arr) => {
    console.log('Defult array is: ',arr);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        arr[i] **= 2;
        sum += arr[i] ;
    }

    const avg = sum / arr.length;
    console.log('Squre array is: ',arr);
    console.log('Sum is: ',sum);
    return avg;
}

const arr = [1, 2, 3, 4, 5];
const result = arrowFunction(arr);
console.log('Avarage is: ',result);
