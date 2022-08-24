function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      const num = arr[i] + arr[j];
      if (result.includes(num)) {
        continue;
      }
      result.push(num);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1])); // [2,3,4,5,6,7]
console.log(solution([5, 0, 2, 7])); // [2,5,7,9,12]

/*
i: 0 , j:1,2,3,4
i: 1 , j:  2,3,4
i: 2 , j:    3,4
i: 3 , j:      4
 */
