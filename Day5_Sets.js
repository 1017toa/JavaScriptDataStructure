//======================한샘===================================
// Day5 : Sets
// I. Sets General

// has() : 인자가 Set 안에 존재하는지 boolean 체크
// clear() : Set 모든 객체 제거
// size() : set의 객체 수 반환
// values() :삽입 순으로 Set 객체 내 각 요소에 대한 값을 포함하는 새로운 Iterator 객체를 반환
Set.prototype.isSuperset = function (subset) {
  for (var elem of subset) {
    // boolean 값만 반환하기 때문에 set 값 필요 X
    if (!this.has(elem)) {
      // 각 요소가 존재하지 않는 경우 false 반환
      return false;
    }
  }
  return true; // 모든 요소가 존재하면 true 반환
};

Set.prototype.union = function (setB) {
  var union = new Set(this); // 기존 set 객체를 인자로 받아옴
  for (var elem of setB) {
    // setB의 모든 객체를 add 시킴
    union.add(elem);
  }
  return union; // add 시킨 set를 반환
};

Set.prototype.intersection = function (setB) {
  var intersection = new Set(); // 빈 set로 시작해서 기존 set 값을 받지 않음
  for (var elem of setB) {
    if (this.has(elem)) {
      // 두 set가 중복으로 가지고 있는 값인지 체크
      intersection.add(elem); // true면 add
    }
  }
  return intersection; // add 시킨 값들 반환
};

Set.prototype.difference = function (setB) {
  var difference = new Set(this); // 기존 set 객체를 인자로 받아옴
  for (var elem of setB) {
    difference.delete(elem); // setB의 객체를 인자로 기존 set 객체를 삭제
  }
  return difference; // 삭제시키고 남은 값 반환
};

//Examples
var set1 = new Set([1, 2, 3, 4]),
  set2 = new Set([2, 3]),
  set3 = new Set([3, 4, 5, 6]);

console.log(set1.isSuperset(set2)); // => true
console.log(set1.union(set3)); // => Set(6) { 1, 2, 3, 4, 5, 6 }
console.log(set1.intersection(set3)); // => Set(2) { 3, 4 }
console.log(set1.difference(set3)); // => Set(2) { 1, 2 }

// Sets의 중요한 기능들인
// Union : 합집합 반환
// Intersection : 교집합 객체 반환
// Difference : 앞의 set 기준 여집합 반환
// Subset(isSuperset) : 뒤의 set이 앞의 set의 부분 집합인지 boolean 값 반환
// 정리할 Notion 페이지 >> https://www.notion.so/beingbetterone/Programming-Language-Frameworks-c9dda106572d496da0966f179328d529

// II. Sets Basic 1

function sizeLegacy(set) {
  var size = 0; // size 초기 값 설정
  for (let item of set) {
    size++; // set의 객체 수 만큼 size의 크기 증가
  }
  return size; // 증가한 size 값 반환
}
console.log(sizeLegacy(set1)); // 4

// 다음의 프로세스를 수행하는 function sizeLagacy()를 작성하세요.
// 각 아이템 개체의 property를 수동으로 추출하고 그 property의 수를 계산하여 이 수를 반환하여 출력하세요.
// items, hasOwnProperty(element)를 이용한다.
// 주석을 잊지 마세요.

// III. Sets Basic 2

function valueLegacy(set) {
  var items = []; // items 빈 배열 생성
  for (let item of set) {
    items.push(item); // set 인자의 개별 객체를 for문으로 items 배열에 추가
  }
  return items; // set의 객체를 요소로 추가한 items 배열 반환
}
console.log(valueLegacy(set1)); // [ 1, 2, 3, 4 ]

// IV. Sets Advnaced 1
var setA = new Set([1, 2, 3]),
  setB = new Set([3, 4, 5]);

console.log(setA.union(setB)); // Set(5) { 1, 2, 3, 4, 5 }

// V. Sets Advanced 2
var setA = new Set([1, 2, 3, 4, 5, 6, 7]),
  setB = new Set([4, 6]);

console.log(setA.intersection(setB)); // Set(2) { 4, 6 }
//======================한샘===================================
