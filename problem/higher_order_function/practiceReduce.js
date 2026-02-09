// 데이터 파일로부터 클래스 넘겨받기.
import prod from "./practiceData.js";

// 넘겨받은 클래스로 인스턴스 만들기
const product = new prod();

// 메서드를 사용해 클래스의 배열을 array 변수에 할당함.
const array = product.getAllItems();

// 모든 제품의 가격 총합을 구하세요. (결과: 1690000)
const total = array.reduce((acc, cur) => {return acc + cur.price;}, 0);

console.log(total); // 1690000

// 모든 제품의 재고(stock) 총합을 구하세요. (결과: 67)
const stock = array.reduce((acc, cur) => {return acc + cur.stock;}, 0);

console.log(stock); // 67
