// =========================한샘===================================
// Day8. HashTable II
// I. HashTable Advance

// Separate chaining을 이해하고, 숙지하세요.
const hash = (string, stroageSize) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) hash += string.charCodeAt(i);
  // i에 해당하는 문자를 유니코드 값으로 반환
  return hash % stroageSize;
};

class Node {
  hash;
  key;
  value;
  chain; // 노드를 연결 리스트로 사용하기 위해서 추가

  constructor(key, value) {
    this.hash = hash(key, hashT.size);
    this.key = key;
    this.value = value;
  }

  setChain = chain => (this.chain = chain);
}

class HashTableSeparateChaining {
  size;
  storage;

  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }
  add = (key, value) => {
    const node = new Node(key, value);
    const index = hash(key, this.size); // index : key값을 hash 함수로 변환한 값

    if (!this.storage[index]) {
      // index가 비어있으면 노드 추가
      this.storage[index] = node;
    } else {
      this.collision(node, index); // index에 다른 노드가 있으면 collision 함수 호출
    }
    return;
  };
  remove = key => {
    const index = hash(key, this.size);
    if (this.storage[index]) {
      // 노드가 존재하는지 확인
      if (this.storage[index].key === key) {
        // key 값이 일치하는지 확인
        if (this.storage[index].chain) {
          // 노드에 체인이 있는지 확인
          this.storage[index] = this.storage[index].chain; // 체인 노드를 기본 노드로 변경
          delete this.storage[index].chain; // 변경한 체인 노드를 삭제
        }
      } else {
        delete this.storage[index]; // 체인이 없는 노드 삭제
      }
    }
  };
  collision = (node, index) => {
    if (!node.chain) {
      // node.chain이 없는 경우
      this.storage[index].chain = node; // 중복 index를 가진 노드를 chain으로 연결
    } else {
      this.collision(node.chain, index); // 이미 node.chain이 있는 경우 chaining
    }
  };
  lookUp = key => {
    const index = hash(key, this.size);
    const foundNode = this.storage[index];
    if (foundNode.key === key) {
      // key값이 노드와 일치하면 node 반환
      return foundNode;
    } else {
      return this.lookUpChain(foundNode.chain, key); // key 값이 일치하지 않으면 lookUpChain 호출
    }
  };
  lookUpChain(node, key) {
    if (node.key === key) {
      return node;
    } else {
      return this.lookUpChain(node.chain, key); // key 값이 일치할때까지 chain을 찾는 과정 반복
    }
  }
  countAll = () => {
    let cnt = 0;
    this.storage.map(each => (cnt += this.countChains(each))); // countChains 함수를 이용해 모든 노드를 count
    return cnt;
  };
  countChains = node => {
    let eachCnt = 0;
    if (!node) {
      return 0;
    } else {
      eachCnt++;
      eachCnt += this.countChains(node.chain); // chaining된 노드를 count
    }
    return eachCnt;
  };
  toString = () => {
    const nodeArr = [];
    var str = '';
    for (let i = 0; i < this.size; i++) {
      if (this.storage[i]) {
        nodeArr.push(this.storage[i]); // 모든 존재하는 노드 값을 nodeArr 배열에 추가
      }
    }
    for (let i = 0; i < nodeArr.length; i++) {
      str += `${nodeArr[i].hash}=> [${nodeArr[i].key}: ${nodeArr[i].value}] `;
      // nodeArr의 hash, key, value 값을 출력
      if (nodeArr[i].chain) {
        str += `,[${nodeArr[i].chain.key}: ${nodeArr[i].chain.value}] `;
        // chaining 된 노드의 hash, key, value 값을 출력
      }
    }
    return str;
  };
}

// Separate chaining과 Linear probing의 차이를 설명하세요.

//Separate chaining : 해시값 충돌을 연결 리스트를 사용해 각 노드가 하나의 연결 리스트가 되면서 해결
//                    해시값을 공유할 수 있음

//Linear probing : 해시값 충돌을 빈배열로 이동하면서 해결, 기존 해시값을 유지할 수 없음

// 가이드를 따라 코드를 작성하세요 : Separate chaning

const hashT = new HashTableSeparateChaining(13);
hashT.add('Ygritte', 'ygritte@email.com');
hashT.add('Jonathan', 'jonathan@email.com');
hashT.add('Jamie', 'jamie@email.com');
hashT.add('Jack', 'jack@email.com');
hashT.add('Jasmine', 'jasmine@email.com');
hashT.add('Jake', 'jake@email.com');
hashT.add('Nathan', 'nathan@email.com');
hashT.add('Athelstan', 'athelstan@email.com');
hashT.add('Sue', 'sue@email.com');
hashT.add('Aethelwulf', 'aethelwulf@email.com');
hashT.add('Sargeras', 'sargeras@email.com');
console.log(hashT.toString());
// 0=> [Jonathan: jonathan@email.com] ,[Jack: jack@email.com]
// 1=> [Aethelwulf: aethelwulf@email.com]
// 2=> [Jake: jake@email.com] ,[Sue: sue@email.com]
// 3=> [Ygritte: ygritte@email.com]
// 4=> [Nathan: nathan@email.com]
// 5=> [Jamie: jamie@email.com] ,[Sargeras: sargeras@email.com]
// 9=> [Jasmine: jasmine@email.com] ,[Athelstan: athelstan@email.com]
hashT.remove('Jake');
console.log(hashT.toString());
// 2=> [Sue: sue@email.com] // 나머지는 위와 동일

// 가이드를 따라 코드를 작성하세요 :
class HashTableLinearProbing {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  modularHash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; ++i) {
      sum += key.charCodeAt(i);
    }

    return sum % this.size;
  }

  put(key, value) {
    let hash = this.modularHash(key);
    if (this.table[hash] === undefined) {
      this.table[hash] = [hash, key, value];
    } else {
      while (this.table[hash] !== undefined) {
        hash++;
      }
      this.table[hash] = [hash, key, value];
    }
  }

  get(key) {
    let hash = this.modularHash(key);

    while (this.table[hash] !== undefined) {
      if (this.table[hash][1] === key) {
        return this.table[hash][2];
      }
      hash++;
    }

    return undefined;
  }

  remove(key) {
    return delete this.table[this.modularHash(key)];
  }
  printList() {
    return this.table.filter(function (element) {
      if (element) {
        console.log(element);
      }
    });
  }
}

var exampletable = new HashTableLinearProbing(13);
exampletable.put('Ygritte', 'ygritte@email.com');
exampletable.put('Jonathan', 'jonathan@email.com');
exampletable.put('Jamie', 'jamie@email.com');
exampletable.put('Jack', 'jack@email.com');
exampletable.put('Jasmine', 'jasmine@email.com');
exampletable.put('Jake', 'jake@email.com');
exampletable.put('Nathan', 'nathan@email.com');
exampletable.put('Athelstan', 'athelstan@email.com');
exampletable.put('Sue', 'sue@email.com');
exampletable.put('Aethelwulf', 'aethelwulf@email.com');
exampletable.put('Sargeras', 'sargeras@email.com');
exampletable.printList();
// [ 0, 'Jonathan', 'jonathan@email.com' ]
// [ 1, 'Jack', 'jack@email.com' ]
// [ 2, 'Jake', 'jake@email.com' ]
// [ 3, 'Ygritte', 'ygritte@email.com' ]
// [ 4, 'Nathan', 'nathan@email.com' ]
// [ 5, 'Jamie', 'jamie@email.com' ]
// [ 6, 'Sue', 'sue@email.com' ]
// [ 7, 'Aethelwulf', 'aethelwulf@email.com' ]
// [ 8, 'Sargeras', 'sargeras@email.com' ]
// [ 9, 'Jasmine', 'jasmine@email.com' ]
// [ 10, 'Athelstan', 'athelstan@email.com' ]
exampletable.remove('Jonathan'); // [ 0, 'Jonathan', 'jonathan@email.com' ] 삭제
exampletable.printList();
// [ 1, 'Jack', 'jack@email.com' ]
// 이후 위와 동일

// =========================한샘===================================
