// import axios from axios;

function getData() {
  axios
    .get(
      "https://crudcrud.com/api/dc2e3904f60745478fe2a2ee985955b7/appointmentData"
    )
    .then((res) => {
      res.data.forEach((element) => {
        console.log(`Name is ${element.name}, age is ${element.age}`);
      });
    });
}

function postData(data) {
  axios
    .post(
      "https://crudcrud.com/api/dc2e3904f60745478fe2a2ee985955b7/appointmentData",
      data
    )
    .then((res) => console.log(res.data));
}

function deleteData(id) {
  axios.delete(
    `https://crudcrud.com/api/dc2e3904f60745478fe2a2ee985955b7/appointmentData/${id}`
  );
}

// postData({ name: "Gill", age: 23 });

// deleteData("650ebba1b987ad03e876bb5f");

getData();
