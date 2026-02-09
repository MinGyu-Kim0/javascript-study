// 데이터 파일로부터 클래스 넘겨받기.
import prod from "./practiceData.js";

// 넘겨받은 클래스로 인스턴스 만들기
const product = new prod();

// 메서드를 사용해 클래스의 배열을 array 변수에 할당함.
const array = product.getAllItems();

// 모든 상품의 가격(price)만 추출하여 새로운 배열 prices를 만드세요.
const prices = array.map((e) => {
  return e.price;
});

console.log(prices); // [ 1500000, 30000, 120000, 15000, 25000 ]

// 모든 상품의 가격에 10% 부가세를 더한 가격을 포함하는 새로운 배열 taxPrices를 만드세요.
const taxPrices = array.map((e) => {
  return e.price + (e.price / 100) * 10;
});

console.log(taxPrices); // [ 1650000, 33000, 132000, 16500, 27500 ]
