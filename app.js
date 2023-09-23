const submit = document.getElementById("Submit");

const list = document.getElementById("List");

const listEl = document.getElementById("list");

submit.addEventListener("click", addToCurdCurd);

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
        const para = document.createElement("p");
        para.innerHTML =
          res.data.username + " - " + res.data.mail + " - " + res.data.mobile;
        li.appendChild(para);
        list.appendChild(li);
      })
      .catch((err) => console.error(err));

    userName.value = "";
    mail.value = "";
    phNum.value = "";

    submit.disabled = false;
  }
}

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

arr = ["650ecc27b987ad03e876bb9a"];

// emptyData(arr);
