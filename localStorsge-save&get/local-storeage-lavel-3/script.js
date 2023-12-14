
// for delete 
const forDeleteBtn = (stringValue) =>{
    localStorage.removeItem(stringValue);
}   

//for send btn
const forSendBtn = (str,value) =>{
    localStorage.setItem(str, value);
}

// common for get input value and converted string for set in local storeage
const forSendButton = (input, key) => {
    const inputValue = document.getElementById(input).value;  
    if(!inputValue){
        alert('Put the value!');
    }
    else{
        const stringValue = JSON.stringify(inputValue);
        document.getElementById(input).value = ''
        forSendBtn(key, stringValue);
    }
}

//For name delete btn
document.getElementById('delete-name-btn').addEventListener('click', function(){
    forDeleteBtn('name');
});

//For name send btn
document.getElementById('send-name-btn').addEventListener('click', function(){
    forSendButton('name-input', 'name');
});

// for delete email
document.getElementById('delete-email-name').addEventListener('click', function(){
    forDeleteBtn('email');
}); 

// for send email
document.getElementById('send-email-btn').addEventListener('click', function(){
    forSendButton('email-field', 'email');
}); 
// for delete text area
document.getElementById('textArea-delete-btn').addEventListener('click', function(){
    forDeleteBtn('message');
}); 

// for send text area
document.getElementById('textArea-send-btn').addEventListener('click', function(){
    forSendButton('text-area', 'message');
}); 

// for reset-btn
document.getElementById('reset-btn').addEventListener('click', function(){
    localStorage.clear();
}); 

