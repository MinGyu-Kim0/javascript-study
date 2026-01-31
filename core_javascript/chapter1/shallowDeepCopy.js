var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 얕은 복사
var user = {
  name: "mingyu",
  // 객체 내부의 객체
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebook: "http://facebook.com/abc",
  },
};
var user2 = copyObject(user);

user2.name = "Jung";
console.log(user.name === user2.name); // false

// 얕은 복사는 중첩된 객체까지 불변객체로 만들지 못함(같은 주솟값을 참조)
user.urls.portfolio = "http://portfolio.com"; // 원본과 사본 모두 수정됨
console.log(user.urls.portfolio === user2.urls.portfolio); // true

user2.urls.blog = ""; // 원본과 사본 모두 수정됨
console.log(user.urls.blog === user2.urls.blog); // true

// 깊은 복사
var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = "";
console.log(user.urls.blog === user2.urls.blog); // false

// 기존의 copyObject를 깊은 복사 방식으로 수정한 함수
var copyObjectDeep = function (target) {
  var result = {};
  // target이 객체인 경우 내부 프로퍼티를 순회하며 함수를 재귀적으로 호출
  // 객체가 아닌 경우엔 target을 그대로 지정.
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); // { a: 1, b: { c: null, d: [1, 3] } }
console.log(obj2); // { a: 3, b: { c: 4, d: [0:1, 1:2] } }

// JSON을 활용한 간단한 깊은 복사
// 객체를 JSON문법으로 표현된 문자열로 전환했다가 다시 JSON 객체로 바꾼다.
// 하지만 __proto__나 getter/setter 등과 같이 JSON으로 변경할 수 없는 건 무시함
// httpRequest로 받은 데이터를 저장한 객체를 복사할 때 등 순수한 정보만 다룰때 활용하기 좋다.
var copyObjectViaJSON = function (target) {
  return JSON.parse(JSON.stringify(target));
};
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
    fucn1: function () {
      console.log(3);
    },
  },
  func2: function () {
    console.log(4);
  },
};
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); // {a: 1, b: { c: null, d: [1, 3], func1: f() }, func2: f() }
console.log(ojb2); // {a: 3, b: { c: 4, d: [1, 2] } }
