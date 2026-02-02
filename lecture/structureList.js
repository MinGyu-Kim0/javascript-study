let myList = [10, 20, 30]; // List

for(value of myList) {
    console.log(value);
}

myList[3] = 40;
for(let i = 0; i < myList.length; i++) {
    console.log(myList[i]); // myList[index]
}