
const title = document.getElementById("Title");

title.innerHTML = "My Title";


const header = document.getElementById("header");

header.style.border = "2px solid red";


const Listitem = document.querySelector("#ListItem");

Listitem.children[0].style.color = "red";
// Listitem.children[2].style.backgroundColor = "green";

Listitem.style.fontWeight = "bold";

const item = document.querySelectorAll(".Litem");

item[1].style.backgroundColor = "green";
item[2].style.display = "none";

const fruit = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < fruit.length;i++){
    fruit[i].style.color = "orange";
}

