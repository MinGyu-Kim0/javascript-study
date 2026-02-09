var func = function (x) {
  console.log(this, x);
};
func(1); // Window { ... } 1 <- 함수로서 호출

var obj = {
  method: func,
};

obj.method(2); // { method: f } 2 <- 메서드로서 호출
