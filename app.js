

const itemList = document.getElementById("items");

const addItem = document.getElementById("submitbtn");

const filter = document.getElementById('filter');

filter.addEventListener('keyup' , filterItems);

addItem.addEventListener('click' , addItemToList);

itemList.addEventListener('click' , removeItem);

function removeItem(e){

    if (e.target.classList.contains('delete')){

        const li = e.target.parentElement;

        itemList.removeChild(li);
    }
}

function addItemToList(e){
    e.preventDefault();

    const li = document.createElement('li');

    li.className = "list-group-item";

    const item = document.getElementById('item').value;
    const description = document.getElementById('description').value;

    li.appendChild(document.createTextNode(item));
    li.appendChild(document.createTextNode(" " + description));

    itemList.appendChild(li);

    const deletebtn = document.createElement('button');

    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    deletebtn.appendChild(document.createTextNode("X"));

    li.appendChild(deletebtn);

}

function filterItems(e){
    e.preventDefault();

    text = e.target.value.toLowerCase();
    // console.log(text);

    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){

        var itemName = item.textContent;
        itemName = itemName.slice(0 , itemName.length - 1);

        if (isSubString(text , itemName)){

            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })
}

function isSubString(a , b){

    for (let i = 0; i <= (b.length - a.length); i++){
        if (b.toLowerCase().slice(i , a.length + i) === a){
            return true;
        }
    }

    return false;
}