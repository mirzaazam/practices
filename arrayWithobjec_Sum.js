

const arr = [
    {name: 'shoe', price: 1200, color: 'white'},
    {name: 'shirt', price: 2200, color: 'red'},
    {name: 'pant', price: 3200, color: 'black'},
    {name: 'belt', price: 500, color: 'black'},
    {name: 'sunglass', price: 200, color: 'blue'}
];

function objectSum(product){
    let sum = 0;
    for ( let i = 0; i < product.length; i++){
        let objectPrice = product[i].price;
        sum += objectPrice;
    }
    return sum;
}

const getResult = objectSum(arr);
console.log('Total price is: ',getResult);