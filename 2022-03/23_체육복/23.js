// 내가 푼 방법 - 18,20 오류남 왜???????
// function solution(n, lost, reserve) {
//   let cnt = 0;
//   // 1.lost,reserve에 없는 애는 cnt+1
//   for (let i = 1; i <= n; i += 1) {
//     if (![...lost, ...reserve].includes(i)) {
//       cnt += 1;
//     }
//   }

//   // 2.lost,reserve 에서 중복되는 애는 cnt+1 하고, 각각의 배열에서 제거하기
//   for (const el of lost) {
//     if (reserve.includes(el)) {
//       cnt += 1;
//       lost = lost.filter((d) => d !== el);
//       reserve = reserve.filter((d) => d !== el);
//     }
//   }

//   // 3.reserve숫자 앞뒤에 lost 있는지 ? 있으면 cnt+2, 해당숫자 제거
//   for (const el of reserve) {
//     if (lost.includes(el - 1)) {
//       cnt += 2;
//       lost = lost.filter((d) => d !== el - 1);
//       reserve = reserve.filter((d) => d !== el);
//     } else if (lost.includes(el + 1)) {
//       cnt += 2;
//       lost = lost.filter((d) => d !== el + 1);
//       reserve = reserve.filter((d) => d !== el);
//     } else {
//       // 4.reserve에만 남아있는 숫자는 cnt+
//       cnt += 1;
//     }
//   }

//   return cnt;
// }

// 방법2
// function solution(n, lost, reserve) {
//   const students = {}; // {1:1 , 2:1 , 3:1 , 4:1 , 5:1}
//   let answer = 0; //

//   // 1.처음엔 모든 학생들이 체육복1개씩 있음.
//   for (let i = 1; i <= n; i += 1) {
//     students[i] = 1;
//   }

//   // 2.잃어버린 사람은 -1씩 , 여분 있는 사람은 +1씩
//   lost.forEach((number) => (students[number] -= 1));
//   reserve.forEach((number) => (students[number] += 1));

//   // 3.여분 있는 학생의 앞뒤를 검색해서, 옷 빌려줌.
//   for (let i = 1; i <= n; i += 1) {
//     if (students[i] === 2 && students[i - 1] === 0) {
//       students[i - 1] += 1;
//       students[i] -= 1;
//     } else if (students[i] === 2 && students[i + 1] === 0) {
//       students[i + 1] += 1;
//       students[i] -= 1;
//     }
//   }

//   // 4.students객체를 돌면서 체육복 갖고있는 학생 수 가운트함.
//   for (const key in students) {
//     if (students[key] >= 1) {
//       answer += 1;
//     }
//   }
//   return answer;
// }

// // 실행코드
// console.log(solution(5, [2, 4], [1, 3, 5])); // 5
// console.log(solution(5, [2, 4], [3])); // 4
// console.log(solution(3, [3], [1])); // 2
console.log(solution(4, [2, 4], [2, 3])); // 4
console.log(solution(10, [1, 3, 7, 10], [1, 4, 8])); // 9 // [0, 3, 7, 10], [0, 4, 8]
// console.log(
//   solution(24, [1, 12, 13, 16, 17, 19, 20, 21, 22], [1, 22, 16, 18, 9, 10]),
// ); // 19
// console.log(solution(7, [2, 3, 4], [1, 2, 3, 6])); // 6
// console.log(solution(10, [1, 2, 3, 4, 6, 9], [2, 3, 5, 7, 8, 10])); // 8
// console.log(solution(10, [2, 5, 3, 7, 8], [1, 2, 9])); // 7
