const numbers = [1, 2, 3];

// 배열 끝에 요소 추가
numbers.push(4); 
console.log(numbers); // [1, 2, 3, 4]

// 배열 끝에서 요소 제거
numbers.pop(); 
console.log(numbers); // [1, 2, 3]

// 배열 앞에 요소 추가
numbers.unshift(0); 
console.log(numbers); // [0, 1, 2, 3]

// 배열 앞에서 요소 제거
numbers.shift(); 
console.log(numbers); // [1, 2, 3]
