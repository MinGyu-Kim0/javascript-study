var fruits = ["apple", "banana", "peach"];
var $ul = document.createElement("ul");         // (공통 코드)

fruits.forEach(function (fruit) {
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruit.bind(null, fruit));
    $ul.appendChild($li);
});
