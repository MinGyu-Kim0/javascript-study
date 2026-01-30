class Robot {
  constructor(name) {
    this.name = name;
  }
}

const r1 = new Robot("알파고");
const r2 = new Robot("베타고");

Robot.prototype.dance = function () {
  console.log(`${this.name} 로봇이 춤을 춥니다.`);
};

r1.dance();
r2.dance();
