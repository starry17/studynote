/** for, if 공배수의 합 */

/** 공배수 구하기 */
// 어떤 수 i가 x로 나누어도 나머지가 0이고 y로 나누어도 나머지가 0일 때 이 수를 x와 y의 공배수라고 한다.

// 1부터 100까지의 범위 안에서 3과 5의 공배수를 모두 출력하고 공배수의 총 합인 sum값을 구해 출력하시오.
const x = 3;
const y = 5;

// 공배수의 총 합을 저장할 변수
let sum = 0;

for (let i=1; i <= 100; i++) {
    // if (i % (x*y) == 0) {
    if (i % x == 0 && i % y == 0) {
        console.log(i);
        sum += 1;
    }
}

console.log("%d과 %d의 공배수의 총 합: %d", x, y, sum);