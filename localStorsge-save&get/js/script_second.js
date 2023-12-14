const getItems = () => {
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity');
    const productValue = product.value;
    const quantityValue = quantity.value;
    product.value = '';
    quantity.value = '';
    if(product.value === null && quantity.value === null){
        alert('Please! put item and quantity');
    }
    else{
        setListItem(productValue,quantityValue);
        // console.log(productValue,quantityValue);
        saveItemToLocalstorage(productValue,quantityValue)
    }
    
}

const setListItem = (product, quantity) =>{
    const ul = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getFromLocalStorage = () =>{
    let cart = {};
    const stored = localStorage.getItem('cart');
    if(stored){
        cart = JSON.parse(stored);
    }
    return cart;
}

const saveItemToLocalstorage = ( product, quantity) =>{
    const cart = getFromLocalStorage();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);

}