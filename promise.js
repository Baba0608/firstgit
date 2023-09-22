console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const wifeBringTicket = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here is Ticket");
    }, 1000);
  });

  let ticket = await wifeBringTicket;
  console.log(ticket);
  console.log("person3: shows ticket");
};

preMovie();

console.log("person4: shows ticket");
