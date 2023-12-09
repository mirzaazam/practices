

/*
    write an arrow function where it will do the following : 
     a) it will be take an array where the array elements will be name of
       your friend
     b) check if the length of each element is even push elements with even
       length to a new array and retuen the result.
*/


const arrowFunction = (arr) => {
    //new array for push even frind name
    const arr2 = [];

    for (let i = 0; i < arr.length; i++){
        if ( arr[i].length % 2 === 0){
            arr2.push(arr[i]);  
        }
    }
    return arr2;
}

const arr = ['sakib', 'rakib', 'nodi', 'abdullah'];
const result = arrowFunction(arr);
console.log(result);