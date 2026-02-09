var Constructor = function (name) {
    this.name = name;
};
Constructor.prototype.method = function () {}; 
Constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);

var arr = [1, 2];
console.dir(arr);
console.dir(Array);

var arr = [1, 2];
arr.forEach(function () {});  // (0)
Array.isArray(arr);           // (0) true
arr.isArray();                // (X) TypeError: arr.isArray is not a function