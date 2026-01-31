/*
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

console.log(user.name, user2.name); -> Jung Jung
console.log(user === user2); -> true
*/

var user = {
  name: "Jaenam",
  gender: "male",
};

// 객체의 가변성에 따른 문제 해결 방법
var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

var user2 = changeName(user, "Jung");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);
