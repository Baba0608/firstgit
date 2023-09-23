const submit = document.getElementById("Submit");

const list = document.getElementById("List");

submit.addEventListener("click", addToCurdCurd);

// ------------------------------------------------------------------------------------
// adding event listener to submit button to sent data to crudcrud
function addToCurdCurd(e) {
  e.preventDefault();

  submit.disabled = true;

  const userName = document.getElementById("userName");
  const mailEl = document.getElementById("mail");
  const phNum = document.getElementById("pnnum");

  if (userName.value != "" && mailEl.value != "" && phNum.value != "") {
    obj = {
      username: userName.value,
      mail: mail.value,
      mobile: phNum.value,
    };

    axios
      .post(
        "https://crudcrud.com/api/523cc2a67c7448ec86e591d6bda586f9/appointmentData",
        obj
      )
      .then((res) => {
        console.log(res.data);
        const li = document.createElement("li");
        const span = document.createElement("span");
        const para = document.createElement("p");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");

        deleteBtn.className = "deleteBtn";
        editBtn.className = "edit";

        deleteBtn.textContent = "X";
        editBtn.textContent = "Edit";

        span.textContent = res.data._id;
        para.innerHTML =
          res.data.username + " - " + res.data.mail + " - " + res.data.mobile;
        li.appendChild(span);
        li.appendChild(para);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        list.appendChild(li);
      })
      .catch((err) => console.error(err));

    userName.value = "";
    mail.value = "";
    phNum.value = "";

    submit.disabled = false;
  }
}

// -------------------------------------------------------------------------------------

// displaying the data on webpage which is in crudcrud
function display() {
  axios
    .get(
      "https://crudcrud.com/api/523cc2a67c7448ec86e591d6bda586f9/appointmentData"
    )
    .then((res) => {
      res.data.forEach((objEl) => {
        const span = document.createElement("span");
        const li = document.createElement("li");
        const para = document.createElement("p");
        const deleteBtn = document.createElement("button");

        const editBtn = document.createElement("button");

        deleteBtn.className = "deleteBtn";
        editBtn.className = "edit";
        editBtn.textContent = "Edit";

        deleteBtn.textContent = "X";

        span.textContent = objEl._id;

        para.textContent =
          objEl.username + " - " + objEl.mail + " - " + objEl.mobile;

        li.appendChild(span);
        li.appendChild(para);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        list.appendChild(li);
      });
    });
}

display();
// -------------------------------------------------------------------------------------
function emptyData(arr) {
  for (let i = 0; i < arr.length; i++) {
    axios
      .delete(
        `https://crudcrud.com/api/523cc2a67c7448ec86e591d6bda586f9/appointmentData/${arr[i]}`
      )
      .then((res) => console.log("deleted"))
      .catch((err) => console.error(err));
  }
}

arr = [""];

// emptyData(arr);

// ------------------------------------------------------------------------------------------

// adding event to delete data from webpage as well as from crudcrud
list.addEventListener("click", deleteFromCrud);

function deleteFromCrud(e) {
  if (e.target.classList.contains("deleteBtn")) {
    const id = e.target.parentElement.firstChild.textContent;
    // console.log(id);

    const ele = e.target.parentElement;
    // console.log(ele);

    list.removeChild(ele);

    axios
      .delete(
        `https://crudcrud.com/api/523cc2a67c7448ec86e591d6bda586f9/appointmentData/${id}`
      )
      .then((res) => console.log("deleted"))
      .catch((err) => console.error(err));
  }
}

// -----------------------------------------------------------------------------------------------
