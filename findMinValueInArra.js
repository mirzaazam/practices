function minValueInArray(numbers){
    let minimumValue = numbers[0];
    for ( let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if (minimumValue > element){
            minimumValue = element;
        }
    }
    return minimumValue;
}

const arry = [30, 49, 38, 39, 29];
const result = minValueInArray(arry);
console.log('Minimum value is: ',result);