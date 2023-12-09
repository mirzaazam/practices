
function a(){
    console.log("first")
}

function b(){
    console.log('second');
    a();
}

function c(a, b){
    return sum =  a + b;
}

c(10, 39);
b();
console.log(sum);