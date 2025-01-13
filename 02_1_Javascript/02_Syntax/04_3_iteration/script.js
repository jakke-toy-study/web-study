const fruits = ["Apple", "Banana", "Cherry"];

// forEach: 배열의 각 요소에 대해 함수를 실행
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});
// Output:
// Index 0: Apple
// Index 1: Banana
// Index 2: Cherry

// for...of: 배열의 요소를 하나씩 순회
for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry