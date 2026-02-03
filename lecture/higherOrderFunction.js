// Higher-order function
// input: fn
// output: fn
// Pros: Abstract and Reusable
function forEach(argArray, argFn) {
  for (let index = 0; index < argArray.length; index++) {
    // console.log(argArray[index]);
    argFn(argArray[index]);
  }
  console.log();
}

function map(argArray, argFn) {
  for (let index in argArray) {
    // argArray[index] += argAddValue;
    // 변경해주는 값을 리턴해줘야 한다.
    argArray[index] = argFn(argArray[index]);
  }
}

let myList = [10, 20, 30, 40];

// 1) 현재 배열의 값을 화면에 출력 하시오
// for (let i = 0; i < myList.length; i++) {
//     console.log(myList[i]);
// }
forEach(myList, (v) => process.stdout.write(`${v}\t`));
myList.forEach((v) => process.stdout.write(`${v}\t`));
//     console.log("After Add 1");
//     Process.stdout.write(`${v}\t`)});

// 2) 각 배열의 원소에 1을 더하시오 (배열 내 원소 값 변경)
// for (let i = 0; i < myList.length; i++) {
//     myList[i] += 1;
// }
map(myList, (v) => {
  return v + 1;
});
myList.map((v) => v + 1);

// 3) 현재 배열의 값을 화면에 출력 하시오
// for (let i in myList) {
//     console.log(myList[i]);
// }
forEach(myList, (v) => {
  process.stdout.write(`${v}\t`);
});

// 4) 각 배열의 원소에 2를 더하시오 (배열 내 원소 값 변경)
// for (let i = 0; i < myList.length; i++) {
//     myList[i] += 2;
// }
map(myList, (v) => v + 2);
myList.map((v) => {
  return v + 1;
});

// 5) 현재 배열의 값을 화면에 출력하시오
// for (value of myList) {
//     console.log(value);
// }
forEach(myList, (v) => {
  process.stdout.write(`${v}\t`);
});

// 각 요소를 도는데 각 요소의 값을 변경함.
// 주어진 값을 더해서 변경한다.
