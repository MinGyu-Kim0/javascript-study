var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a);
    var a = 3;
  };
  inner();
  console.log(a);
};
outer();
console.log(a);

// 호이스팅으로 var a; outer 땡겨옴
// a에 1할당, outer엔 함수 할당.
// outer 호출
// inner 호이스팅 후 함수 할당
// inner 호출
// var a 호이스팅. a가 선언되었기 때문에 전역 컨텍스트의 a에 접근 불가함.
// a를 출력. 아직 값이 할당되지 않아 undefined 출력
// a에 3이 할당됨.
// inner 종료. a에 할당된 3은 날아감.
// outer 실행. 전역 컨텍스트의 변수에 접근해 1을 출력
// 마지막 console.log(a)를 실행하고 1이 출력된 후 전역 컨텍스트 종료
// 프로그램 종료
