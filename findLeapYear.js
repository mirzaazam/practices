function findLeapYear(numbers) {
    let leapArry = [];
    console.log('This is are index & element:');
    for (let i = 0; i <= numbers.length; i++){

       // this for print index and element 
        let index = i;
        let element = numbers[i];
        
        //condition for leap year
        if ( element % 4 == 0 ){ 
            console.log(index,element);
            leapArry.push(element);
        }
    }
    console.log('this are leap year :');
    return leapArry;
}
//deafult array 
const arry = [2023, 2024, 2028, 2030];

//put the funtion in array
let leapyear = findLeapYear(arry);
console.log(leapyear);