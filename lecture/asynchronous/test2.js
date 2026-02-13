let p1 = new Promise(
  // Executor function
  (resolve, reject) => {
    console.log("Executor function is invoked!!");

    setTimeout(() => console.log("wait 3 seconds!!"), 3000);

    resolve("hello");

    reject("kkk");
  },
);

// p1 -> when Success: (result)
// p1 -> when fail: (error)
p1.then(
  (result) => {
    console.log("S" + result);
  },
  (error) => {
    console.log("F" + error);
  },
);
