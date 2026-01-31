var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a);
    // var a = 3;
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
// var a 호이스팅.
// a를 출력. 아직 값이 할당되지 않아 undefined 출력
// a에 3이 할당됨.
