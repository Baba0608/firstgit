
const submit = document.getElementById('Submit');

submit.addEventListener('click' , storeToLocalStorage);


function storeToLocalStorage(e){

    e.preventDefault();

    const userName = document.getElementById('userName').value;

    const pass = document.getElementById('pass').value;


    let myObj = {
        name: userName , 
        password : pass
    };

    let myObj_serialized = JSON.stringify(myObj);

    localStorage.setItem("myObj" , myObj_serialized);

    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

}

    