
const submit = document.getElementById('Submit');

const list = document.getElementById('List');

submit.addEventListener('click' , storeToLocalStorage);


function storeToLocalStorage(e){

    e.preventDefault();

    const userName = document.getElementById('userName').value;

    const pass = document.getElementById('pass').value;


    let myObj = {
        name: userName , 
        password : pass
    };

    const li = document.createElement('li');

    const btn = document.createElement('button');
    btn.appendChild(document.createTextNode('X'))
    btn.className = 'deletebtn';

    li.appendChild(document.createTextNode(userName));
    li.appendChild(document.createTextNode(' - ' + pass));

    li.appendChild(btn);

    list.appendChild(li);



    let myObj_serialized = JSON.stringify(myObj);

    localStorage.setItem(userName , myObj_serialized);

    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
    
}


for (var i = 0; i < localStorage.length; i++){

    myObj = JSON.parse(localStorage.getItem(localStorage.key(i)));

    const li = document.createElement('li');

    const btn = document.createElement('button');
    btn.appendChild(document.createTextNode('X'))
    btn.className = 'deletebtn';
    const text = document.textContent = myObj.name + ' - ' + myObj.password;
    console.log(text);

    li.appendChild(document.createTextNode(text));

    li.appendChild(btn);

    list.appendChild(li);
}

list.addEventListener('click' , deleteFromLocalStorage);

function deleteFromLocalStorage(e){

    if (e.target.classList.contains('deletebtn')){

        const node = e.target.parentElement;
        const information = e.target.parentElement.textContent;

        var ans = '';

        for (let i = 0; i < information.length; i++){

            if (information[i] === '-'){
                break;
            }

            else{
                ans += information[i];
            }
        }

        ans = ans.slice(0 , ans.length - 1);

        localStorage.removeItem(ans);
        list.removeChild(node);

        // location.reload(true);
    }
}
