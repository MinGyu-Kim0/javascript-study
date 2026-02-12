// executor = Promise 객체의 생성자함수 인자값
let p = new Promise(
    // executor -> user defined function
    (resolve, reject) => {
        console.log('start');
        setTimeout(() => {
            if(Math.random > 0.5)
                resolve("S");
            else
                reject("F");
        }, 3000);
        console.log('end');
    }
); 

p.then(resolve => console.log(resolve), reject => console.log(reject));

// 프로미스 객체 생성 후 사용자로 부터 받은 함수를 실행한다.
// p.then(/* OnResolved */, /* OnRejected*/);

// let p2 = new Promise();

// Task A -> Task B -> Task C -> Task D
// p2.then().then().then().catch().finally();`