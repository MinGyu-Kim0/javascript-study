// ------------------------- (1) 전역 컨텍스트. 콜 스택에 가장먼저 올라감.
var a = 1;
function outer() {
  function inner() {
    console.log(a); // undefined
    var a = 3;
  }
  inner(); // ------------- (2) outer 위에 올라가고 가장 먼저 종료됨.
  console.log(a); // 1
}
outer(); // ----------------- (3) 순차적으로 진행되다가 outer를 호출하며 콜스택에 올라감.
//                                inner가 종료된 다음 실행되고 종료됨.
console.log(a); // 1. 전역 컨텍스트 종료 시점. 이후 프로그램 종료
