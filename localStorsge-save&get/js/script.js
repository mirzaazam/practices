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

const pushItemsOnListContainer = (product, quantity) =>{
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    listContainer.appendChild(li);
}