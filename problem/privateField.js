class User {
  #password = undefined;

  set password(newPass) {
    if (newPass.length < 4) {
      return console.log("비밀번호가 너무 짧습니다.");
    }
    this.#password = newPass;
    return console.log("정상 저장됨");
  }

  get password() {
    return "****";
  }
}

const user1 = new User();
user1.password = "123";
console.log(user1.password);

user1.password = "12345";
console.log(user1.password);
