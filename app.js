

const itemList = document.getElementById("items");

itemList.addEventListener('click' , removeItem);

function removeItem(e){

    if (e.target.classList.contains('delete')){

        const li = e.target.parentElement;

        itemList.removeChild(li);
    }
}