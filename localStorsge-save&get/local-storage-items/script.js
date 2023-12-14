

const haveItems = () =>{
    // get item command 
const getItem = localStorage.getItem('get_value');

// set item command
const setItem = localStorage.setItem('set_value');

// clear total from localstorage
const clear = localStorage.clear;

// remove from local Storage
const remove = localStorage.removeItem('remove_value');
}

// set an object in the local storage 
const setAnObject = () =>{
    const anObject = {name: 'Mirza Azam Nohi', age: 24, leptop: 1, mobile: 1};
    const setOb = JSON.stringify(anObject);
    localStorage.setItem('object', setOb);
}