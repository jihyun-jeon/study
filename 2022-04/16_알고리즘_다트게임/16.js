// function solution(dartResult) {
//   const result = [0, 0, 0];
//   const bonus = { S: 1, D: 2, T: 3 };

//   // 0. 점수|보너스|[옵션] 대로 각각 배열의 요소로 만든다.
//   const rx2 = /\d{1,2}[A-Z]["*"|"#"]?/g;
//   const arr = dartResult.match(rx2).map((el) => el); // ['1D', '2S#', '10S']

//   for (let i = 0; i < arr.length; i += 1) {
//     // 각 요소를 돌면서 요소마다
//     // 1. 숫자만 찾아, result 배열에 담는다.
//     result[i] = +arr[i].match(/\d{1,2}/g); // 1, 2, 10

//     // 2. s,d,t 제곱한다
//     const b = arr[i].match(/[A-Z]/g); // D, S, S
//     result[i] **= bonus[b[0]];

//     // 3.옵션 있으면, *(직전 점수와 해당점수에 2곱하고), #(해당점수 -1 곱한다)
//     const op = arr[i].match(/["*"|"#"]$/g); // null, # , null
//     if (op) {
//       // *
//       if (op[0] === '*') {
//         result[i] *= 2;
//         if (result[i - 1]) {
//           result[i - 1] *= 2;
//         }
//       }
//       // #
//       if (op[0] === '#') {
//         result[i] *= -1;
//       }
//     }
//   }

//   return result.reduce((acc, cur) => acc + cur);
// }

// 방법2
// function solution(dartResult) {
//   const bonus = { S: 1, D: 2, T: 3 };
//   const options = { '*': 2, '#': -1, '': 1 };

// // 정규식으로 ['1S', '2D*', '3T'] 만들기
// const darts = dartResult.match(/\d{1,}[SDT][*#]?/g); // 방법1 -\d{1,}(한자리 수 이상 숫자 추출함), [SDT](S,D,T 중 문자하나), [*#](*,# 중 문자하나), ?(있을수도 없을수도 있음)
// // const darts = dartResult.match(/\d.\D?/g); // 방법2 - \d(0-9숫자 다 추출함), .(any sigle character), \D( 숫자가 아닌 문자), ?(있을수도 없을수도 있음)

//   for (let i = 0; i < darts.length; i += 1) {
//     const [, digit, b, op] = darts[i].match(/(\d{1,})([SDT])([*#]?)/);
//     // ['1S', '1', 'S', '', index: 0, input: '1S', groups: undefined]
//     // console.log(digit, b, op); // 1, S // 2 D * //3 T
//     const score = digit ** bonus[b] * options[op];

//     if (op === '*' && darts[i - 1]) {
//       darts[i - 1] *= options['*'];
//     }

//     darts[i] = score;
//   }

//   return darts.reduce((a, b) => a + b);
// }

// 방법3
// function solution(dartResult) {
//   const reg = /[\d]+[SDT][*#]*/g;
//   // [\d](0-9중 숫자 한개), +(한개 이상), [SDT](S,D,T 중 한개) , [*#](*,#중 한개), *(0개 이상)
//   // +(1개 이상) *(0개 이상)
//   const darts = dartResult.match(reg); // ['1D', '2S#', '10S']
//   const result = [];

//   for (let i = 0; i < darts.length; i += 1) {
//     let number = darts[i].match(/[\d]+/g)[0];
//     const bonus = darts[i].match(/[SDT]/g)[0];
//     const option = darts[i].match(/[*#]/g);

//     switch (bonus) {
//       case 'S':
//         number **= 1;
//         break;
//       case 'D':
//         number **= 2;
//         break;
//       default:
//         number **= 3;
//     }

//     result[i] = number;

//     if (option) {
//       switch (option[0]) {
//         case '*':
//           result[i - 1] *= 2;
//           result[i] *= 2;
//           break;
//         default:
//           result[i] *= -1;
//       }
//     }
//   }

//   return result.reduce((acc, cur) => acc + cur);
// }

// console.log('1:', solution('1S2D*3T')); // 37 ←11 * 2 + 22 * 2 + 33
// console.log('2:', solution('1D2S#10S')); // 9 ←12 + 21 * (-1) + 101
// console.log('3:', solution('1D2S0T')); // 3 ←12 + 21 + 03
// console.log('4:', solution('1S*2T*3S')); // 23 ←-11 * 2 * 2 + 23 * 2 + 31
// console.log('5:', solution('1D#2S*3S')); // 5 ←12 * (-1) * 2 + 21 * 2 + 31
// console.log('6:', solution('1T2D3D#')); // -4 ←13 + 22 + 32 * (-1)
// console.log('7:', solution('1D2S3T*')); // 59 ←12 + 21 * 2 + 33 * 2
