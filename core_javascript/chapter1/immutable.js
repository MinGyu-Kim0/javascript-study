var user = {
  name: "Jaenam",
  gender: "male",
};

// 객체의 가변성에 따른 문제가 발생
var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "Jung");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // -> Jung Jung
console.log(user === user2); // -> true

// 객체의 가변성에 따른 문제 해결 방법
var user = {
  name: "Jaenam",
  gender: "male",
};

var changeName = function (user, newName) {
  // 새로운 객체를 반환하도록 수정
  return {
    name: newName,
    gender: user.gender,
    // 문제점 -> 변경할 필요가 없는 프로퍼티를 하드코딩으로 입력
    // 변경해야할 정보가 많을 수록 입력하는 수고가 늘어난다.
  };
};

var user2 = changeName(user, "Jung");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name); // -> Jaenam Jung
console.log(user === user2); // -> false
