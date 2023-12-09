
function wordReverse(str){
    let res = str.split(' ');
    const result = [];
    for ( i = res.length - 1; i >= 0; i--){
        result.push(res[i]);
    }
    const repo = result.join(' ');   
    return repo;
}

const arr = 'i am a boy';
let repo = wordReverse(arr);
console.log(repo);
