function maxValue(a, b, c){
    if ( a > b && a > c ){
        console.log(a);
    }
    else if (b > a && b > c){
        console.log(b);
    }
    else{
        console.log(c);
    }

}

const res = maxValue(34, 53, 23);
