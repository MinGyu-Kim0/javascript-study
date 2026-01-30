// Product 클래스를 만드세요.
// 모든 상품이 생성될 때마다 전체 상품 개수를 저장하는 static count 변수를 1씩 증가시키세요.
// 생성자(constructor)는 상품 이름(name)과 가격(price)을 입력받습니다.
// printCount라는 static 메서드를 만들어 현재 총생산된 상품 개수를 출력하세요.

class Product {
  name = "";
  price = 0;
  static count = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
    Product.count++;
  }

  static printCount() {
    console.log(`현재 등록된 상품은 총 ${Product.count}개입니다.`);
  }
}

p1 = new Product("노트북", 1000);
p2 = new Product("마우스", 50);

Product.printCount();

8시 30분 다시 풀기