let shoppingList = ["Milk", "Eggs", "Bread"];

// 새로운 항목 추가
shoppingList.push("Butter");
console.log(shoppingList); // ["Milk", "Eggs", "Bread", "Butter"]

// 특정 항목 제거
shoppingList.splice(shoppingList.indexOf("Eggs"), 1);
console.log(shoppingList); // ["Milk", "Bread", "Butter"]

// 목록 확인
shoppingList.forEach((item, index) => {
  console.log(`${index + 1}: ${item}`);
});
// Output:
// 1: Milk
// 2: Bread
// 3: Butter