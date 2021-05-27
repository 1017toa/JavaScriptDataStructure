//=================한샘==================
// Day7. HashTable

// I. HashTable Basic

// HashTable과 Dictionary의 특징 중 공통점과 차이점을 확인하고, 정리하세요.
// 공통점 : Key와 Value를 사용해서 자료를 저장함

// HashTable 특징
// 1. Non-Generic (모든 데이터 타입을 다 받고 처리 가능)
// 2. Key 와 Value 모두 Object를 입력받는다.
// 3. 박싱/언박싱(Boxing/Un-Boxing)을 사용한다.(자료 입력시 박싱, 사용하는 곳에서 언박싱)

// Dictionary 특징
// 1. Generic
// 2. Key 와 Value 모두 Strong Type을 입력받는다.
// 3. 박싱/언박싱이 일어나지 않는다.(사용할 타입을 미리 설정하기 때문)

// 결론 : 고정적으로 하나의 타입만 입력받을 시 딕셔너리,
//        Value에 일정한 형식이 없고 여러 형태를 저장하려면 해시테이블을 사용

// II. HashTable Basic 2

class HashTable {
  constructor() {
    this.values = {};
    this.length = 0; // put하면 1++
    this.size = 17; // 임의의 사이즈 설정
  }

  hashCode(key) {
    // 해시코드 설정
    return key.toString().length % this.size;
  }

  put(key, value) {
    // 객체 삽입
    const hash = this.hashCode(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }

  search(key) {
    // 키 값으로 value 반환
    const hash = this.hashCode(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key) // 해시 값과 키 값이 일치하는지 확인
    ) {
      return this.values[hash][key];
    } else {
      return null;
    }
  }
  toString() {
    // 주소, 키, value 값 추출해 콘솔에 메시지 출력
    return Object.entries(this.values).forEach(([key, value]) => {
      console.log(
        `[address: ${key}] [key: ${Object.keys(value)}] [value: ${Object.values(
          value
        )}]`
      );
    });
  }
}

const hash = new HashTable();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');

console.log(hash.hashCode('Jake')); // 4
console.log(hash.search('Sargeras')); // sargeras@email.com
hash.toString();
// [address: 3] [key: Sue] [value: sue@email.com]
// [address: 4] [key: Jack,Jake] [value: jack@email.com,jake@email.com]
// [address: 5] [key: Jamie] [value: jamie@email.com]
// [address: 6] [key: Nathan] [value: nathan@email.com]
// [address: 7] [key: Ygritte,Jasmine] [value: ygritte@email.com,jasmine@email.com]
// [address: 8] [key: Jonathan,Sargeras] [value: jonathan@email.com,sargeras@email.com]
// [address: 9] [key: Athelstan] [value: athelstan@email.com]
// [address: 10] [key: Aethelwulf] [value: aethelwulf@email.com]
// undefined   ?? 브리핑때 질문

//=================한샘==================
