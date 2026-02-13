new Promise((resolve, reject) => {
//   resolve("Executor: S");
  reject("Executor: F");
})
  .then(
    (result) => {
      console.log(`then-S: ${result}`);
    },
    (error) => {
      console.log(`then-F: ${error}`);
      return Promise.reject("reject-Then");
    },
  )
  // Exception Handling
  .catch((error) => console.log(`catch: ${error}`))
  .finally(() => console.log(`finally`));
