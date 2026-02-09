var Person = function (name) {
  this._name = name;
};
Person.prototype.getName = function () {
  return this._name;
};

var suzi = new Person("Suzi");

console.log(suzi.__proto__.getName()); // undefined

Person.prototype === suzi.__proto__ // true

var suzi2 = new Person('Suzi');
suzi2.__proto__._name = 'SUZI__proto__'
console.log(suzi2.__proto__.getName());   // SUZI__proto__

var suzi3 = new Person('Suzi', 28);
suzi3.getName()  // Suzi
var iu = new Person('Jieun', 28);
iu.getName();  // Jieun