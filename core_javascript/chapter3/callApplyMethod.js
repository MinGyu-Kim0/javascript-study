// 유사배열객체에 배멸 메서드를 적용
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
Array.prototype.push.call(obj, "d");
console.log(obj); // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr); // [] 'a', 'b', 'c', 'd' ]

// argumentrs, NodeList에 배열 메서드를 적용
function a() {
  var argv = Array.prototype.slice.call(arguments);
  argv.forEach(function (arg) {
    console.log(arg);
  });
}
a(1, 2, 3);

document.body.innerHTML = "<div>a</div><div>b</div><div>c</div";
var nodeList = document.querySelectorAll("div");
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function (node) {
  console.log(node);
});

// 문자열에 배열 메서드 적용 예시
var str = "abc def";

Array.prototype.push.call(str, ", pushed string");
// Error: Cannot assign to read only property 'length' of object [object String]

Array.prototype.concat.call(str, "string"); // [String {"abc def"}, "string"]

Array.prototype.every.call(str, function (char) {
  return char !== " ";
}); // false

Array.prototype.some.call(str, function (char) {
  return char === " ";
}); // true

var newArr = Array.prototype.map.call(str, function (char) {
  return char + "!";
});

console.log(newArr); // ['a!', 'b!', 'c!', ' !', 'd!', 'e!', 'f!']

var newStr = Array.prototype.reduce.apply(str, [
  function (string, char, i) {
    return string + char + i;
  },
  "",
]);
console.log(newStr); // "a0b1c2 3d4e5f6"

// ES6의 Array.from 메서드
var obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
var arr = Array.from(obj);
console.log(arr); // ['a', 'b', 'c']
