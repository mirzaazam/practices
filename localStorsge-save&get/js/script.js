const getItems = () =>{
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity');
    const productValue = product.value;
    const quantityValue = quantity.value;
    product.value = '';
    quantity.value = '';
    pushItemsOnListContainer(productValue,quantityValue);
    console.log(productValue,quantityValue);
}

//push the items in ul container 
const pushItemsOnListContainer = (product, quantity) =>{
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    listContainer.appendChild(li);
    // getStoreValueFromLocalstorage();
    saveItemToLocalstorage(product,quantity);
}



//Get items on local storage in the browser
const getStoreValueFromLocalstorage = () =>{
    let cart = {};
    const stored = localStorage.getItem('cart');
    if(stored){
        cart = JSON.stringify(stored);
    }
    return cart;
}

// Get items on local storage in the browser
const saveItemToLocalstorage = (product, quantity) =>{
   const cart = getStoreValueFromLocalstorage();
   cart[product] = quantity;
   const stringifyToobject = JSON.stringify(cart);
   localStorage.setItem('cart', stringifyToobject);
}

// getStoreValueFromLocalstorage();