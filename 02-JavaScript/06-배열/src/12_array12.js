/** 성적 구하기 */

/**
학생별 총점과 평균 구하기

| 이름 | 국어 | 영어 | 수학 |
| 철수 | 92 | 81 | 76 |
| 영희 | 72 | 95 | 84 |
| 민혁 | 80 | 86 | 98 |
 */

// 학생 성적표 배열
const grade = [
    ["철수", 92, 81,76],
    ["영희", 72, 95, 84],
    ["민혁", 80, 86, 98]
];

// 이 위치에서 변수를 초기화하면 모든 학생의 총점
let sum = 0;

// 2차 배열 탐색
for (let i=0; i<grade.length; i++) {

    // 학생 한명을 의미하는 부모 반복문 안에서 변수를 초기화하면 학생 개인별 총점
    let personal_sum = 0;

    // i번째 행에서 0번째 열은 학생 이름이므로 합산에서 제외한다.
    for (let j=1; j<grade[i].length; j++) {
        //console.log(grade[i][j]);
        sum += grade[i][j];
        personal_sum += grade[i][j];
    }

    // 모든 학생에 대한 총점을 구하게 된다.
    // console.log("모든 학생의 총점 : %d", sum);
    // 학생 개인별 총점을 구하게 된다.
    console.log("%s의 총점: %d", grade[i][0], personal_sum);

    // 이름은 과목수에서 제외해야 하므로 "길이-1"
    const personal_avg = personal_sum / (grade[i].length-1);
    console.log("%s의 평균: %d", grade[i][0], personal_avg);
}