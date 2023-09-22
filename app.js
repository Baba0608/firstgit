// const submit = document.getElementById('Submit');

// const list = document.getElementById('List');

// submit.addEventListener('click' , storeToLocalStorage);

// function storeToLocalStorage(e){

//     e.preventDefault();

//     const userName = document.getElementById('userName');

//     const pass = document.getElementById('pass');

//     if (userName.value === '' || pass.value === ''){
//         const msg = document.getElementById('msg');

//         msg.innerHTML = 'Please enter all fields';
//         userName.value = '';
//         pass.value = '';

//         return;
//     }

//     let myObj = {
//         name: userName.value ,
//         password : pass.value
//     };

//     const li = document.createElement('li');

//     const btn = document.createElement('button');
//     const edit = document.createElement('button');
//     btn.appendChild(document.createTextNode('X'));
//     btn.className = 'deletebtn';
//     edit.appendChild(document.createTextNode('Edit'))
//     edit.className = 'edit';

//     li.appendChild(document.createTextNode(userName.value));
//     li.appendChild(document.createTextNode(' - ' + pass.value));

//     li.appendChild(btn);
//     li.appendChild(edit);

//     list.appendChild(li);

//     let myObj_serialized = JSON.stringify(myObj);

//     localStorage.setItem(userName.value , myObj_serialized);

//     let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

//     userName.value = '';
//     pass.value = '';

// }

// for (var i = 0; i < localStorage.length; i++){

//     myObj = JSON.parse(localStorage.getItem(localStorage.key(i)));

//     const li = document.createElement('li');

//     const btn = document.createElement('button');
//     const edit = document.createElement('button');
//     btn.appendChild(document.createTextNode('X'))
//     btn.className = 'deletebtn';
//     edit.appendChild(document.createTextNode('Edit'))
//     edit.className = 'edit';
//     const text = document.textContent = myObj.name + ' - ' + myObj.password;
//     console.log(text);

//     li.appendChild(document.createTextNode(text));

//     li.appendChild(btn);
//     li.appendChild(edit);

//     list.appendChild(li);
// }

// list.addEventListener('click' , deleteFromLocalStorage);

// function deleteFromLocalStorage(e){

//     if (e.target.classList.contains('deletebtn')){

//         const node = e.target.parentElement;
//         const information = e.target.parentElement.textContent;

//         var ans = '';

//         for (let i = 0; i < information.length; i++){

//             if (information[i] === '-'){
//                 break;
//             }

//             else{
//                 ans += information[i];
//             }
//         }

//         ans = ans.slice(0 , ans.length - 1);

//         localStorage.removeItem(ans);
//         list.removeChild(node);

//         // location.reload(true);
//     }
// }

// list.addEventListener('click' , editUserName);

// function editUserName(e){

//     e.preventDefault();

//     if (e.target.classList.contains('edit')){

//         const msg = document.getElementById('msg');
//         msg.innerHTML = "Please enter correct details";
//         const node = e.target.parentElement;
//         const information = e.target.parentElement.textContent;

//         var ans = '';

//         for (let i = 0; i < information.length; i++){

//             if (information[i] === '-'){
//                 break;
//             }

//             else{
//                 ans += information[i];
//             }
//         }

//         ans = ans.slice(0 , ans.length - 1);

//         localStorage.removeItem(ans);
//         list.removeChild(node);
//     }
// }

let lastActivity = new Date();
let posts = [];

function createPost(obj) {
  return new Promise((resolve, reject) => {
    posts.push(obj);
    lastActivity = new Date();
    resolve(lastActivity);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      const deletedPost = posts.pop();
      lastActivity = new Date();
      resolve([deletedPost.title, lastActivity]);
    } else {
      reject("ERROR");
    }
  });
}

console.log(lastActivity);
const promise1 = createPost({ title: "POST1" });
const promise2 = createPost({ title: "POST2" });
const promise3 = deletePost();

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);
