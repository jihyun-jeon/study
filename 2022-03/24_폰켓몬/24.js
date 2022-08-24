function solution(nums) {
  const total = nums.length / 2;
  const sortNum = new Set(nums).size;

  return total > sortNum ? sortNum : total;
}

// reduce를 사용하여 객체에 키는 중복되지 않는 속성을 이용해 포켓몬 종류를 셈
// function solution(nums) {
//   const sortObj = nums.reduce((acc, cur) => {
//     acc[cur] ? (acc[cur] += 1) : (acc[cur] = 1);
//     return acc;
//   }, {});

//   const sortNum = Object.keys(sortObj).length;
//   const totalNum = nums.length / 2;

//   return totalNum > sortNum ? sortNum : totalNum;
// }

// console.log(solution([3, 1, 2, 3])); // 2
// console.log(solution([3, 3, 3, 2, 2, 4])); // 3
// console.log(solution([3, 3, 3, 2, 2, 2])); // 2
