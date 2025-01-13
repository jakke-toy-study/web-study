const fruits = ["Apple", "Banana", "Cherry", "Date"];

// splice: 배열의 특정 부분 제거 및 추가
fruits.splice(1, 2, "Blueberry", "Grapes"); 
console.log(fruits); // ["Apple", "Blueberry", "Grapes", "Date"]

// slice: 배열의 특정 부분 복사
const slicedFruits = fruits.slice(1, 3); 
console.log(slicedFruits); // ["Blueberry", "Grapes"]
