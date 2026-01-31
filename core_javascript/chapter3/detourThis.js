// 내부함수에서의 this를 변수를 이용해 우회하는 방법(ES5)
var obj = {
  outer: function () {
    console.log(this); // (1) { outer: f } (=== obj)

    var innerFunc1 = function () {
      console.log(this); // (2) Window { ... }
    };
    innerFunc1();

    var self = this; // outer의 this(obj)를 self에 할당
    var innerFunc2 = function () {
      console.log(self); // (3) { outer: f } (=== obj)
    };
    innerFunc2();
  },
};

obj.outer();

// this를 바인딩하지 않는 화살표 함수(ES6)
var obj = {
  outer: function () {
    console.log(this); // (1) { outer: f }
    var innerFunc = () => {
      console.log(this); // (2) { outer: f }
    };
    innerFunc();
  },
};
obj.outer();
