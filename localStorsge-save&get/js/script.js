const getItems = () => {
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity');
    const productValue = product.value;
    const quantityValue = quantity.value;
    product.value = '';
    quantity.value = '';
    pushItemsOnListContainer(productValue, quantityValue);
    console.log(productValue, quantityValue);
}

const pushItemsOnListContainer = (product, quantity) => {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    listContainer.appendChild(li);
    saveItemToLocalstorage(product, quantity);
}

const getStoreValueFromLocalstorage = () => {
    let cart = {};
    const stored = localStorage.getItem('cart');
    if (stored) {
        cart = JSON.parse(stored); // Change here
    }
    return cart;
}

const saveItemToLocalstorage = (product, quantity) => {
    const cart = getStoreValueFromLocalstorage();
    cart[product] = quantity;
    const stringifyToobject = JSON.stringify(cart);
    localStorage.setItem('cart', stringifyToobject);
}
