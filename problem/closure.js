function createIdGenerator(prefix) {
  let id = 0;
  return function () {
    id++;
    return prefix + `_${id}`;
  };
}

const userIds = createIdGenerator("USER");
const productIds = createIdGenerator("PROD");

console.log(userIds());
console.log(userIds());
console.log(productIds());
console.log(productIds());
