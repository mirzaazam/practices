

function maxDetails(phone){
    let largest = phone[0].price;
    for (let i = 0; i < phone.length; i++){
        if ( phone[i].price > largest ){
            largest = phone[i].price;
        }
    }
    // const largestBrand = largest.name;
    // console.log(largestBrand);
    return largest;
}

const arr = [
    {name: 'htc', camera: 10, price: 80000, color: 'black'},
    {name: 'xaomi', camera: 4, price: 12000, color: 'black'},
    {name: 'oppo', camera: 20, price: 22000, color: 'white'},
    {name: 'vivo', camera: 13, price: 30000, color: 'red'},
    {name: 'techno', camera: 34, price: 11000, color: 'blue'},
    {name: 'iphone', camera: 50, price: 92000, color: 'Silver'}
];
const myPrice = maxDetails(arr);
console.log(myPrice);