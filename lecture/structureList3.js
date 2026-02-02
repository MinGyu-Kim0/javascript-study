const myList = [10, 20, , ,50];

myList.forEach(v => {console.log(v)});

// // for of -> value
// for(const value of myList) {
//     console.log(value);
// }


// // for in -> index
// // 성능이 좋지 않음. 권장하지 않음.
// for(const index in myList) {
//     console.log(index);
// }