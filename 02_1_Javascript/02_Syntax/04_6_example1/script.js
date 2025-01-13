const scores = [85, 90, 78, 92, 88];

// 배열의 합계 계산
const total = scores.reduce((sum, score) => sum + score, 0);

// 평균 점수 계산
const average = total / scores.length;

console.log(`총합: ${total}`); // 총합: 433
console.log(`평균: ${average}`); // 평균: 86.6