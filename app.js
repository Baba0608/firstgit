
const submit = document.getElementById('Submit');

submit.addEventListener('click' , storeToLocalStorage);


function storeToLocalStorage(e){

    e.preventDefault();

    const userName = document.getElementById('userName').value;

    const pass = document.getElementById('pass').value;

    
    localStorage.setItem(userName , pass);

}

    