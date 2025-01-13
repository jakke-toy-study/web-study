const numbers = [5, 10, 15, 20];

// find: 조건에 맞는 첫 번째 요소 반환
const found = numbers.find(num => num > 10);
console.log(found); // 15

// filter: 조건에 맞는 모든 요소 반환
const filtered = numbers.filter(num => num > 10);
console.log(filtered); // [15, 20]

// includes: 배열에 값이 포함되어 있는지 확인
console.log(numbers.includes(10)); // true
console.log(numbers.includes(30)); // false