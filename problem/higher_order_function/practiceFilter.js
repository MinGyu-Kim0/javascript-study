// 데이터 파일로부터 클래스 넘겨받기.
import prod from "./practiceData.js";

// 넘겨받은 클래스로 인스턴스 만들기
const product = new prod();

// 메서드를 사용해 클래스의 배열을 array 변수에 할당함.
const array = product.getAllItems();

// 브랜드(brand)가 'Samsung'인 제품만 모아서 samsungProducts 배열을 만드세요.
const samsungProducts = array.filter((e) => {
  return e.brand === "Samsung";
});

console.log(samsungProducts);

// 재고(stock)가 0보다 큰(품절되지 않은) 제품만 필터링하여 availableProducts 배열을 만드세요.
const availableProducts = array.filter((e) => {
  return e.stock > 0;
});

console.log(availableProducts);
