// 내보낼 클래스 설정
export default class products {
  constructor() {
    this.products = [
      { id: 1, name: "게이밍 노트북", price: 1500000, brand: "Samsung", stock: 5 },
      { id: 2, name: "무선 마우스", price: 30000, brand: "Logitech", stock: 0 },
      { id: 3, name: "기계식 키보드", price: 120000, brand: "Corsair", stock: 10 },
      { id: 4, name: "스마트폰 거치대", price: 15000, brand: "Samsung", stock: 50 },
      { id: 5, name: "USB 허브", price: 25000, brand: "Logitech", stock: 2 }
    ];
  }
  getAllItems() {
    return this.products;
  }
}
