let name = "John"; // 재할당 가능
const age = 30; // 재할당 불가능
var country = "USA"; // 재할당 가능 (옛날 방식)

console.log(name); // John
console.log(age); // 30
console.log(country); // USA

name = "Jane";
console.log(name); // Jane

// age = 31; // 오류: const는 재할당할 수 없습니다.