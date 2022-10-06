// function topK(nums, k) {
//   const result = [];
//   const obj = {};

//   nums.forEach((el) => {
//     obj[el] = (obj[el] ? obj[el] : 0 ) + 1;
//   });

//   const values = Object.values(obj).sort((a, b) => b - a);
//   const entriesArr = Object.entries(obj);

//   values.forEach((num) => {
//     const findArr = entriesArr.find((arr) => arr[1] === num);
//     result.push(+findArr[0]);
//   });

//   return result.slice(0, k);
// }

// < 다른사람 방법 > - 나는 value arr따로, entries arr 따로 만들었는데, 이 방법은 이걸 한번에 처리함.
function topK(nums, k) {
  const obj = {};

  nums.forEach((el) => {
    obj[el] = (obj[el] ? obj[el] : 0) + 1;
  });

  const arr = Object.entries(obj);

  return arr
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((el) => Number(el[0]));
}

// console.log(topK([5, 5, 3, 3, 3, 1], 2)); // [3,5]
// console.log(topK([1, 1, 1, 2, 2, 3], 2)); // [1,2]
// console.log(topK([1], 1)); // [1]
