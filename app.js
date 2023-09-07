
const list = document.querySelector(".list-group");

console.log(list.parentElement);

console.log(list.lastElementChild);

list.lastElementChild.style.color = "red";

console.log(list.lastChild);

console.log(list.firstElementChild);

const newDiv = document.createElement('div');

// console.log(newDiv);

newDiv.setAttribute('title' , 'hello');

const textNode = document.createTextNode("HEllo");
const textNode1 = document.createTextNode("HEllo");
newDiv.appendChild(textNode);
console.log(newDiv);

const container = document.querySelector(".container");
const topele = document.querySelector("#header-title");

container.insertBefore(newDiv , topele);


const newDiv1 = document.createElement('div');
newDiv1.className = "list-group-item";
newDiv1.appendChild(textNode1);
const topitem = list.firstElementChild;

list.insertBefore(newDiv1 , topitem);