// < Set > : 배열과 유사함
// *배열과 차이 1.중복값 사용 안됨. 2.인덱스로 접근할 수 없음. 3.때문에 요소 순서에 의미가 없음

// 1. Set 객체의 생성
// - 이터러블(배열,객체 등 순회가능한 것)을 인수로 전달받아 set객체를 생성함
const setObj1 = new Set(); // {} - Set생성자 함수로 인한 인스턴스 객체가 생김
const setObj2 = new Set([1, 2, 3, 4, 5]); // {1, 2, 3, 4, 5}

// 2. 중복된 값은 Set객체에 요소로 저장되지 않음.
const setObj3 = new Set([1, 1, 2, 2, 3, 4, 5]); // {1, 2, 3, 4, 5}

// 2-1. Set을 이용해 배열의 중복 요소 제거하는 법
const arr = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5];
const x = new Set(arr); // {1,2,3,4,5}
const arrResult = Array.from(x); // Array.from - 이터러블객체,유사 배열 객체를 새로운 array로 바꿈(얕은 복사)
// console.log(arrResult); // [1,2,3,4,5]

// 3.요소의 개수 확인 - Set.prototype.size
const setObj = new Set([1, 2, 3, 3, 4, 4, 4]);
// console.log(setObj.size); // 4

// 4.요소 추가 - Set.prototype.add();
// : 반환값 - 새로운 요소가 추가된 Set객체를 반환함.
setObj.add(5);
setObj.add(true);
let threeArr = ['a', 'b', 'c'];
setObj.add(threeArr); // setObj = {1, 2, 3, 4, 5, true, ["a","b","c"]}

// 5.요소 검색 - Set.prototype.has();
// set객체에 해당 요소가 존재하면 true, 아니면 false를 반환
// console.log(setObj.has(1)); // true

// 6.요소 삭제 - Set.prototype.delete();
// : 반환값 - 삭제 성공 여부를 나타내는 불리언 값 반환됨.
setObj.delete(threeArr); // true
setObj.delete(true); // true
// console.log(setObj); // setObj = {1, 2, 3, 4, 5}

// 7.요소 일괄 삭제 - Set.prototype.clear();
setObj.clear(); // {}

// 8.요소 순회
const setObject = new Set([1, 2, 3, 4, 5]);
// 1)forEach - Set객체는 순서에 의미가 없어, 인덱스 요소를 갖지 않음.
// setObject.forEach((el) => console.log(el)); // 1,2,3,4,5

// 2)for...of
// for (const el of setObject) {
// console.log(el); // 1,2,3,4,5
// }

// 9.Set객체는 이터러블임.
const setObject1 = new Set([1, 2, 3, 4, 5]); // setObject1 = {1, 2, 3, 4, 5}
// 1) 따라서 스프레드 문법 쓸 수 있음.
// console.log([...setObject1]); // [1, 2, 3, 4, 5]
// 2)배열의 디스트럭처링 할 수 있음.
const [a, b, ...rest] = setObject1;
// console.log(a, b, rest); // 1 , 2 ,[3, 4, 5]

// < Map > : 객체와 유사함
// *객체와 차이
// 1.객체:이터러블x / Map객체:이터러블ㅇ
// 2.객체:프로퍼티명에 문자,심벌값만 가능 / Map객체: 프로퍼티명에 객체를 포함한 모든 값 가능

// 1. Map 객체의 생성
// (1)
const mapObj1 = new Map(); // {} - Map생성자 함수로 인한 인스턴스 객체가 생김
// (2)
// - 이터러블을 인수로 전달받아 Map객체를 생성함
// - 인수로 전달되는 이터러블은 키와 값의 쌍으로 구성된 요소로 구성되야 함.
// Map객체 생성시 처음부터 값을 넣으려면, 이중배열로 인수를 전달하는 형식임.
const mapObj2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]); // {'key1' => 'value1', 'key2' => 'value2'}

// 2.요소 개수 확인 - Map.prototype.size
// console.log(mapObj2.size); // 2

// 3.요소 추가 - Map.prototype.set()
// 반환값: 새로운 요소가 추가된 Map객체를 반환함.
const mapObj = new Map();
mapObj.set('key1', 'value1').set('key2', 'value2');
// console.log(mapObj); // {'key1' => 'value1', 'key2' => 'value2'}

// 4. 중복된 키를 갖는 요소는 Map객체에 요소로 될 수 없음.
mapObj.set('key1', 'value1');
// console.log(mapObj); // {'key1' => 'value1', 'key2' => 'value2'}

// 5.문자열뿐 아니라 모든 값을 키로 사용할 수 있음.
mapObj.set(['a', 'b', 'c'], 'value3');
mapObj.set({ k: 'v' }, 'value4');
// console.log(mapObj); // {'key1' => 'value1', 'key2' => 'value2', Array(3) => 'value3', Object => "value4"}

// 6.요소 취득 - Map.prototype.get()
const lee = { name: 'Lee' };
const kim = { name: 'Kim' };
const mapObject = new Map([
  [lee, 'designer'],
  [kim, 'developer'],
]);
// console.log(mapObject); // mapObject = [{Object => "developer"} , {Object => "designer"}]
// console.log(mapObject.get(kim)); // developer

// 6. 요소 검색 -  Map.prototype.has()
// Map객체에 해당 key가 존재하면 true, 아니면 false를 반환
// console.log(mapObject.has(kim)); // true

// 7.요소 삭제 - Map.prototype.delete();
// : 반환값 - 삭제 성공 여부를 나타내는 불리언 값 반환됨.
mapObject.delete(lee); // true
// console.log(mapObject); // mapObject = [{Object => "developer"}]

// 8.요소 일괄 삭제 - Map.prototype.clear();

// 9. 요소 순회
const MAPOBJ = new Map([
  ['a', '1'],
  ['b', '2'],
  ['c', '3'],
]);
// console.log(MAPOBJ); // mapObject = {'a' => '1', 'b' => '2', 'c' => '3'}

// 1)forEach
// forEach((현재 순회중인 요소의 값, 현재 순회중인 요소의 키, 현재 순회중인 객체자체)=>{})
// MAPOBJ.forEach((value, key, map) => console.log(value, key, map)); // 1,a , 2,b,  3,b,MAPOBJ

// 2)for...of
for (const el of MAPOBJ) {
  // console.log(el); // ['a', '1'] , ['b', '2'] , ['c', '3']
}

for (const key of MAPOBJ.keys()) {
  console.log(key); // a,b,c
}

for (const value of MAPOBJ.values()) {
  console.log(value); // 1,2,3,
}

for (const entry of MAPOBJ.entries()) {
  console.log(entry); // ['a', '1'] , ['b', '2'] , ['c', '3']
}

for (const [k, v] of MAPOBJ.entries()) {
  console.log(k, v); // a 1, b 2, c 3
}

// 10.Map객체는 이터러블임.
// 1) 따라서 스프레드 문법 쓸 수 있음.
// console.log([...MAPOBJ]); // [['a', '1'] , ['b', '2'] , ['c', '3']]

// 2)배열의 디스트럭처링 할 수 있음.
const [k, v] = MAPOBJ;
// console.log(k, v); // ['a', '1']  ['b', '2']
