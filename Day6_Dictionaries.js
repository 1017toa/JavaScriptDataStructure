//==========================한샘==================================
// I. Dictionary Basic

class Dictionary {
  constructor() {
    this.dict = {};
  }
  add(key, value) {
    // key, value 값을 받아서 dict의 마지막에 추가
    this.dict[key] = value;
  }
  remove(key) {
    // key 값을 받아서 dict에서 key, value 값을 삭제
    delete this.dict[key];
  }
  set(key, value) {} // ?
  hasKey(key) {
    // key 값을 받아서 dict에 존재하는지 boolean 값 반환
    return key in this.dict;
  }
  values() {
    // dict의 모든 value값 반환
    return Object.values(this.dict);
  }
  keys() {
    // dict의 모든 key값 반환
    return Object.keys(this.dict);
  }
  keyValues() {
    // dict 반환
    return this.dict;
  }
  get(key) {
    if (key in this.dict);
    return this.dict[key];
  }
  forEach(key, value) {
    console.log('forEach:', `key: ${key}, value: ${value}`);
  }
}
var dict = new Dictionary();
dict.add('Gandalf', 'gandalf@email.com');
dict.add('John', 'johnsnow@email.com');
dict.add('Tyrion', 'tyrion@email.com');
console.log(dict.keys()); // [ 'Gandalf', 'John', 'Tyrion' ]
dict.remove('Gandalf');
console.log(dict.hasKey('Gandalf')); // false
console.log(dict.values()); // [ 'johnsnow@email.com', 'tyrion@email.com' ]
console.log(dict.keyValues()); // { John: 'johnsnow@email.com', Tyrion: 'tyrion@email.com' }
console.log(dict); // Dictionary {dict: { John: 'johnsnow@email.com', Tyrion: 'tyrion@email.com' }}
console.log(dict.get('Tyrion')); // tyrion@email.com

dict.forEach('John', 'johnsnow@email.com'); // forEach: key: John, value: johnsnow@email.com

// 지금까지 수행한 작업을 바탕으로 왜 dictionary가 앞으로의 작업에서 중요할지를 각자 근거(최소 3가지 이상)를 들어서 설명해 보세요.
//1. 유저 데이터를 시스템과 연결해 저장할 수 있고 특정 상황에 따라 True False로 유저를 제한할 수 있음
//2. 키를 중심으로 데이터를 호출하기 때문에 배열 순서를 신경쓸 필요가 없음
//3. 유저, 파티의 시나리오별 값을 설정하고 데이터를 모두 SQL 쿼리로 받아오고 저장할 수 있음

//==========================한샘==================================
