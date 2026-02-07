// 각 턴마다 주사위를 굴려 나온 숫자(km) 만큼 이동한다.
// 차량별로 연료량(fuel)과 연비(power)는 무작위로 생성된다.
// 남은 연료가 이동할 거리에 필요한 연료보다 부족하면 이동하지 못한다.
// 모든 유저가 이동할 수 없는 턴에 게임이 종료된다.
// 게임 종료 시점에 가장 멀리 이동해 있는 사람이 승리.

// 간단한 자동차 객체
var car = {
  fuel: Math.ceil(Math.random() * 10 + 10), // 연료
  power: Math.ceil(Math.random() * 3 + 2), // 연비(km/L)
  moved: 0,
  run: function () {
    var km = Math.ceil(Math.random() * 6);
    var wasteFuel = km / this.power;
    if (this.fuel < wasteFuel) {
      console.log("이동불가");
      return;
    }
    this.fuel -= wasteFuel;
    this.moved += km;
    console.log(km + "km 이동 (총 " + this.moved + "km)");
  },
};

// 접근 권한 제어를 하지 않았으므로 외부에서 변수에 접근이 가능해짐