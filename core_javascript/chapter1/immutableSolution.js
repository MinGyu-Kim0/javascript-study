// 기존 정보를 복사해서 새로운 객체를 반환하는 함수(얕은 복사)
var copyObject = function (target) {
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};
// 아쉬운 점
// 1. 프로토타입 체이닝 상의 모든 프로퍼티를 복사함.
// 2. getter/setter는 복사하지 않음.
// 3. 얕은 복사만을 수행함.
// 하지만 이 문제를 모두 보완하려면 함수가 무거워질 수 밖에 없다.

// copyObject를 이용한 객체 복사
var user = {
  name: "Jaenam",
  gender: "male",
};

var user2 = copyObject(user);
user2.name = "Jung";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}
console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2); // false
