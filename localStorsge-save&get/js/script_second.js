const getItems = () => {
    const product = document.getElementById('product');
    const quantity = document.getElementById('quantity');
    const productValue = product.value;
    const quantityValue = quantity.value;
    product.value = '';
    quantity.value = '';
    if(product.value === '' && quantity.value === ''){
        alert('Please! put item and quantity');
    }
    else{
        setListItem(productValue,quantityValue);
        console.log(productValue,quantityValue);
    }
    
}

const setListItem = (product, quantity) =>{
    const ul = document.getElementById('list-container');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    ul.appendChild(li);
}