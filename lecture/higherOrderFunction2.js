// 배열을 돌면서 각 요소 출력하기
function forEach(array, func) {
  // 순회
  for (let index = 0; index < array.length; index++) {
    func(array[index]);
  }
}

// 배열 돌면서 사용자가 입력한 값 더하기
function map(array, func) {
  // 순회
  for (let index = 0; index < array.length; index++) {
    array[index] = func(array[index]);
  }
  console.log();
}

let myList = [10, 20, 30, 40];

// 1) 현재 배열의 값을 화면에 출력 하시오
map(myList, (prt) => {
  console.log(prt);
});
// 2) 각 배열의 원소에 1을 더하시오 (배열 내 원소 값 변경)
forEach(myList, (add) => {
  return add + 1;
});
// 3) 현재 배열의 값을 화면에 출력 하시오
map(myList, (v) => process.stdout.write(`${v}\t`));
// 4) 각 배열의 원소에 2를 더하시오 (배열 내 원소 값 변경)

// 5) 현재 배열의 값을 화면에 출력하시오
