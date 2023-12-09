
// febo = [0, 1, 1, 2, 3, 5, 8, 13, 21......]

function febo(number){
    let arr = [0, 1];
    for ( let i = 2; i < number; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr;
}
 const result = febo(20);
 console.log(result);