// 데이터 파일로부터 클래스 넘겨받기.
import prod from "./practiceData.js";

// 넘겨받은 클래스로 인스턴스 만들기
const product = new prod();

// 메서드를 사용해 클래스의 배열을 array 변수에 할당함.
const array = product.getAllItems();

// products 배열을 순회하며 각 상품의 name을 콘솔에 출력하세요.
array.forEach((e) => {
  console.log(e.name);
});

// 각 상품의 name과 price를 조합하여 "상품명: 가격원" 형식으로 출력하세요.
array.forEach((e) => {
  console.log(`${e.name}: ${e.price}원`);
});
