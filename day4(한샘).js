//----------------------한샘---------------------------

// Day4 : Linked Lists

// I. Linked Lists General

// push(element) : 배열의 마지막에 새로운 요소를 추가
// insertByIndex(element, index) : 배열의 특정 위치에 새로운 요소를 추가
// getElementAt(index) 배열에서 주어진 위치의 index값을 반환
// remove(element) : 배열에서 요소를 제거
// indexOf(element) : 배열에서 요소 값으로 찾은 index를 반환
// removeAt(index) : index 값으로 list의 item을 삭제
// size() : linked list가 가지고 있는 총 데이터 개수를 반환
// toString() : 배열의 요소들을 문자열로 변환

// II. Linked Lists Basic

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class ListNode {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0; // 연결 리스트의 사이즈로 노드의 개수를 의미합니다.
  }

  find(callback) {
    // 검색 메서드 get과 indexOf를 위한 사전 함수
    //전체 노드를 undefined 이외의 값이 나올 때까지 순회하고 값을 찾으면 리턴합니다.
    for (
      let current = this.first, position = 0;
      current;
      current = current.next, position += 1
    ) {
      const result = callback(current, position);
      //콜백 함수는 현재 노드와 인덱스를 확인하고 값 또는 undefined를 리턴합니다.
      if (result !== undefined) {
        return result;
      }
    }

    return undefined;
  }
  get(index = 0) {
    // 인덱스 위치를 받고 노드를 반환합니다.
    return this.find((current, position) => {
      if (position === index) {
        return current;
      }

      return undefined;
    });
  }
  indexOf(value) {
    // 인덱스 값을 받고 노드를 반환합니다.
    return this.find((current, position) => {
      if (current.value === value) {
        return current;
      }

      return undefined;
    });
  }
  addFirst(value) {
    // list 맨 앞에 노드를 추가합니다.
    const newNode = new Node(value);
    newNode.next = this.first;

    if (this.first) {
      this.first.previous = newNode;
    } else {
      this.last = newNode; // 리스트에 아무 것도 없는 경우입니다.
    }
    this.first = newNode;
    this.size += 1;
    return newNode;
  }
  addLast(value) {
    // list 맨 뒤에 노드를 추가합니다.
    const newNode = new Node(value);

    newNode.previous = this.last;
    if (this.last) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
    this.size += 1;
    return newNode;
  }
  add(value, position = 0) {
    // value를 지정한 위치에 노드로 추가합니다.
    if (position === 0) {
      return this.addFirst(value);
    }
    if (position === this.size) {
      return this.addLast(value);
    }
    const current = this.get(position);

    if (current) {
      const newNode = new Node(value);
      newNode.previous = current.previous;
      newNode.next = current;
      current.previous.next = newNode;
      current.previous = newNode;
      this.size += 1;
      return newNode;
    }
    return undefined;
  }
  toString() {
    // 모든 노드를 순서대로 str 형태로 출력합니다.
    var currNode = this.first;
    var str = '[ ' + currNode.value + ' ';
    while (currNode.next != null) {
      str += currNode.next.value + ' ';
      currNode = currNode.next;
    }
    return str + ']';
  }
  printlist() {
    // 첫번째 노드를 출력합니다.
    return this.get();
  }
}
var listNode = new ListNode();
listNode.addLast(4);
listNode.addLast(7);
listNode.addLast(8);
listNode.addLast(10);
console.log(listNode.printlist());

// III. Linked Lists Advanced

var listNode = new ListNode();
listNode.addLast(1);
listNode.addLast(3);
listNode.addLast(4);
console.log(listNode.toString());
listNode.add(2, 1);
console.log(listNode.toString());

//-----------------------한샘----------------------------------------
