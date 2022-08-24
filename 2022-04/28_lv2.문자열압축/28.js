// < 내가 한 방법 - 못품ㅠㅠ >
// function solution(idx) {
//   let result = '';
//   let arr = [];
//   for (let i = 2; i < idx.length; i += 1) {
//     let cnt = 0;

//     for (let p = 0; p < idx.length; p += i) {
//       let idx2 = idx.slice(); // ababcdcdababcdcd
//       let stand = idx2.slice(0, i); // ab cd

//       if (stand === idx2.slice(p, p + i)) {
//         // 03 25 47
//         cnt += 1;
//       } else {
//         if (cnt < 2) {
//           cnt = '';
//         }
//         result += `${cnt}${stand}`;
//         stand = idx2.slice(p, p + i);
//         idx2 = idx2.slice(p);
//       }
//     }
//     arr.push(result);
//     result = '';
//   }
//   return arr;
// }
// console.log(solution('ababcdcdababcdcd'));

/*
방법1
function solution(s) {
    var answer = [s.length]; // 압축이 안된 문자열도 넣어줘야 모든 테스트 통과함
    let max_len=Math.floor(s.length/2); //압축할 수 있는 경우 최대 문자열/2 의 길이까지
//     자르는 길이
    for(let i=1;i<=max_len;i++){ //문자를 1개~문자열길이/2까지 해본다
        let cnt=1;
        let sub_str="";
        for(let j=0;j<s.length;j+=i){
            const first=s.substring(j,j+i); //substring은 뒤의 인덱스가 길이를 넘어가면
            // 개수에 상관없이 남은 문자열을 리턴해준다
            const second=s.substring(j+i,j+i*2);
            if(first===second){
                cnt+=1;
            }else{
                if(cnt==1){
                    sub_str=sub_str+first; //숫자랑 문자열을 더하면 숫자가 문자로 변환
                }else{
                    sub_str=sub_str+cnt+first;
                    cnt=1;
                }
            }
        }
        answer.push(sub_str.length);
    }
    return Math.min(...answer); //최소길이 구한다
*/
/*
방법2
function solution(s) {
    var answer = s.length;

    for(var len=1;len<=s.length/2;len++){
        var str="";
        var idx=0;
        var tmp=s.substring(0,len);
        var cnt=1;
        for(idx=len;idx<=s.length;idx+=len){
            if(tmp===s.substring(idx,idx+len)){
                cnt++;
            }
            else{
                if(cnt===1) str+=tmp;
                else str+=cnt+tmp;
                cnt=1;
                tmp=s.substring(idx,idx+len);
            }
        }

        if(cnt===1) str+=tmp;
        else str+=cnt+tmp;

        answer=Math.min(answer,str.length);
    }
    return answer;
}
*/

/*
function solution (s) {
    return Math.min(...Array(s.length).fill()
        .map((_, i) => i + 1)
        .map(n => s.match(new RegExp(`.{1,${n}}`, 'g')))
        .map(chunks => {
            let n = 1
            let prev = chunks[0]
            let str = chunks.length === 1 ? prev : ''
            for (let i = 1; i < chunks.length; i++) {
                const curr = chunks[i]
                const isLast = i === chunks.length - 1
                if (curr === prev) {
                    n++
                    if (isLast) str += (n > 1 ? n : '') + curr
                } else {
                    str += (n > 1 ? n : '') + prev
                    prev = curr
                    n = 1
                    if (isLast) str += curr
                }
            }
            return str.length
        }))
}
*/
let a = 1;
a = 2;
console.log(a);

const b = 1;
b = 2;
