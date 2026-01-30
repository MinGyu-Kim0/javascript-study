// 클래스
class Character {
  // 멤버 변수
  name = "";
  hp = 0;

  // 생성자
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
  }
  // 메서드
  attack() {
    console.log(`${this.name}이(가) 기본 공격을 합니다.`);
  }
}
// 인스턴스(객체) 생성
char1 = new Character("gsc", 100);

char1.attack();

// 부모 클래스 상속
class Wizard extends Character {
  mp = 0;

  constructor(name, hp, mp) {
    super(name, hp); // 부모 클래스 생성자 가져오기
    this.mp = mp;
  }
  attack() {
    super.attack(); // 부모 클래스 메서드 가져오기
    console.log(`${this.name}이(가) 불꽃 마법을 시전합니다!`);
  }
}

const sorceress = new Wizard("제미나이", 100, 50);
sorceress.attack();
