print = console.log;
// let myList1 = [100]; // dense array
// let myList2 = [10]; // dense array

// myList1[1] = 200; // dense array
// myList2[5] = 20; // sparse array

// print(`myList1: ${myList1}, length: ${myList1.length}`);
// print(`myList2: ${myList2}, length: ${myList2.length}`);

// -------------------------------------------------

// let myList1 = [100, 200, 300]; // dense array
// let myList2 = [10, 20, 30]; // dense array

// delete myList1[1]; // sparse array
// delete myList2[0]; // sparse array 
// // hole을 만드는 순간 안 땡겨줌. 
// // hashFunction으로 인덱스 값을 가지고 객체를 바꿔버림. Map으로 바뀜.
// print(`myList1: ${myList1}, length: ${myList1.length}`); 
// print(`myList2: ${myList2}, length: ${myList2.length}`);

// ---------------------------------------

let myList1 = [100, 200, 300]; // dense array
let myList2 = [10, 20, 30]; // dense array

myList1[7] = 400; // sparse array

for (let i = 0; i < myList2.length; i++) {
    print(myList2[i]);
}

for (let i = 0; i < myList1.length; i++) {
    print(myList1[i]);
}

print(`myList1: ${myList1}, length: ${myList1.length}`); // 순회가 깨짐 
print(`myList2: ${myList2}, length: ${myList2.length}`);

print(myList1.length === Object.keys(myList1).length); // false
print(myList2.length === Object.keys(myList2).length); // true
// Object.keys(리스트) 넣으면 배열 요소 값을 가져온다.
// 같으면 dense array, 다르면 sparse array
