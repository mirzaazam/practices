
 function reverseStr(text){
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i-- ){
        let element = text[i];
        reversed += element;
        console.log(reversed);
    }
    return reversed;
}

const arr = 'i am a good boy';
const res = reverseStr(arr);
console.log(res);


//without reverse
 function reverseStr1(text1){
    let reversed = '';
    for (let i = 0; i < text1.length; i++ ){
        let element = text1[i];
        reversed += element;
        console.log(reversed);
    }
    return reversed;
}

const arr1 = 'i am a good boy';
const res1 = reverseStr1(arr1);
console.log(res1);
