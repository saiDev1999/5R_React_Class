// JS is a async or sync ?

const { default: axios } = require("axios");

// long running(dependent) tasks : data fetching (api)

// Asynchrnous JS :

// 1. callbacks
// 2. promises
// 3. Async await

// Promise is an object

// 1. Fufill(Resolve)
// 2. Pending
// 3. Reject

// 1. consuming code
// 2. producing code

// 2. producing code
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = {
      name: "ram",
    };
    const error = true;
    if (error) {
      reject("Data not retrieved");
    } else {
      resolve(data);
    }
  }, 2000);
});

// 1. consuming code
// promise
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

const fetchData = async () => {
  try {
    const result = await promise;

    console.log(`Hai good morning ${result.name}`);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

// fetch()
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// axios
//   .get()
//   .then((res) => confirm.log(res))
//   .catch((err) => console.log(err));
