
let countValue = 1;
const functionForCount = () => {
    let value = document.getElementById('count-value');
    value.innerText = countValue++;
    // console.log(r);
    storeValue()
}

const storeValue = () =>{
    localStorage.setItem('count', countValue);
}

const getValueFromStorage = ()=>{
    const value = localStorage.getItem('count');
    let countHouse = document.getElementById('count-value');
    countHouse.innerText = value;
    console.log(value);
}
getValueFromStorage();