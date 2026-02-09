// 데이터 파일로부터 클래스 넘겨받기.
import prod from "./practiceData.js";

// 넘겨받은 클래스로 인스턴스 만들기
const product = new prod();

// 메서드를 사용해 클래스의 배열을 array 변수에 할당함.
const array = product.getAllItems();

// 가격이 50,000원 이상인 제품들의 name만 추출하여 배열로 만드세요. (먼저 필터링하고, 그 뒤에 이름을 매핑하세요)
const filteredArray = array
  .filter((e) => {
    const filtered = e.price > 50000;
    return filtered;
  })
  .map((e) => {
    return e.name;
  });
console.log(filteredArray);

// 'Logitech' 브랜드 제품들의 가격을 10% 할인된 가격으로 변환하여 배열로 만드세요.
const Logitech = array.filter(e => {
    return e.brand === 'Logitech';
}).map(e => {
    return e.price - (e.price * 0.1);
})

console.log(Logitech);