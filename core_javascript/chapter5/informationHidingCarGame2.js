var createCar = function () {
  var fuel = Math.ceil(Math.random() * 10 + 10); // 연료(L)
  var power = Math.ceil(Math.random() * 3 + 2);  // 연비(km / L)
  var moved = 0;                                 // 총 이동거리
  return {
    get moved() {
      return moved;
    },
    run: function () {
      var km = Math.ceil(Math.random() * 6);
      var wasteFuel = km / power;
      if (fuel < wasteFuel) {
        console.log("이동불가");
        return;
      }
      fuel -= wasteFuel;
      moved += km;
      console.log(km + "km 이동 (총 " + moved + "km). 남은 연료: " + fuel);
    },
  };
};
var car = createCar();

// 클로저를 이용해 접근 권한 제어를 하였지만 메서드를 덮어씌우는 어뷰징은 막지 못함.
