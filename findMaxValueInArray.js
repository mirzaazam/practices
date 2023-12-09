function maxValueInArray(numbers){
    let largestValue = numbers[0];
    for ( let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if (largestValue < element){
            largestValue = element;
        }
    }
    return largestValue;
}

const arry = [30, 49, 38, 39, 29];
const result = maxValueInArray(arry);
console.log('max value is: ',result);