// <내가 한 방법>
// function solution(strings, n) {
//   const alpha = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16,
//     q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

//   // 1. { 3: ['abce', 'abcd'], 24: ['cdx'] }; 이렇게 만들기
//   const obj = {};
//   strings.forEach((el) => {
//     const number = alpha[el[n]];

//     if (obj[number]) {
//       obj[number] = [...obj[number], el];
//       return;
//     }
//     obj[number] = [el];
//   });

//   // 2. 같은 순서 있으면 문자순으로 정렬하여 결과값 배열로 출력.
//   const result = [];
//   for (const [key, value] of Object.entries(obj)) {
//     value.sort();
//     result.push(...value);
//   }

//   return result;
// }

// <방법2 - n번째 알파벳을 각 string의 젤 앞에 붙여 정렬함.>
// function solution(strings, num) {
//   const arr = strings.map((el) => el[num] + el); // ['cabce', 'cabcd', 'xcdx']
//   arr.sort(); // ['cabcd', 'cabce', 'xcdx']
//   return arr.map((el) => el.slice(1));
// }

// <방법3 - sort 사용 (질문)>
// function solution(strings, n) {
//     var answer = [];
//     strings.sort((a,b)=>{
//         if(a[n]>b[n]){
//             return 1
//         } else if(b[n]>a[n]){
//             return -1
//         } else if(a[n]==b[n]){
//             if(a>b){
//                 return 1
//             } else if(a<b){
//                 return -1
//             }   else{
//                 return 0
//             }
//         }
//     })
//     return strings
// }

// 실행코드
// console.log(solution(['sun', 'bed', 'car'], 1)); // ["car", "bed", "sun"]
console.log(solution(['abce', 'abcd', 'cdx'], 2)); // ["abcd", "abce", "cdx"]
