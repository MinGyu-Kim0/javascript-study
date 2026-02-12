function makeDelay(argMs) {
    let endTime = Date.now() + argMs;
    while(Date.now() < endTime) {}
}

console.log("10");

console.log("20");

setTimeout(() => {console.log("50");}, 1000);

console.log("30");

makeDelay(5000);
console.log("40");