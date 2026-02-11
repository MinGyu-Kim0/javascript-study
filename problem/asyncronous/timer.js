// wait라는 함수를 만드세요. 이 함수는 밀리초(ms) 단위의 시간을 인자로 받습니다.
// setTimeout을 사용하여 지정된 시간이 지나면 Promise가 resolve(성공) 되도록 구현하세요.
// wait 함수를 사용하여 "1초 대기 -> '1초 지남' 출력 -> 2초 대기 -> '2초 지남' 출력" 하는 코드를 
// then 체이닝 방식으로 작성하세요.

// 함수
function wait(ms) {
  return new Promise((resolve) => { // <-- resolve를 콜백으로 넘겨줌
    setTimeout(resolve, ms);
  });
}

// 사용
wait(1000)
  .then(() => {
    console.log("1초 지남");
    return wait(2000);  // <- 다음 then으로 가기위해 promise를 반환해야 함.
  })
  .then(() => console.log("2초 지남"));
