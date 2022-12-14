/** for문 합계구하기 */

// 합계를 구하기 위해서는 반복문 진입 전 0으로 초기화된 변수가 필요하다.
// 이 변수에 합계 대상값들을 누적합산한다.
let x = 0;

// i가 1부터 10이하인 동안 1씩 증가 --> i의 범위: 1~10
for (let i = 1; i <= 10; 1++) {
    // 미리 준비한 변수에 i를 합산
    x += i;
    console.log("i=%d, x=%d", i, x);
}

console.log("1부터 10까지의 합: " + x);