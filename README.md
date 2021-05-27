**Principles**
1. Branch for Each Day(Day1, Day2, ...)
2. On Daily Branch, One Code File for Each Member(Tag)
3. One Merge Code File(Tag)
4. Totally, 5 Code Files : 4 + 1
5. 1 More Commits each Day, 1 More PR(to 3 members-include mentor), then Push to Repo

**Day 1 : Arrays**
1. 아래의-평균 기온(Farenheit)데이터를 이용하세요.(F 단위는 삭제해도 무방)
  - [Day 1] 
    -- 10:00 72F
    -- 11:00 75F
    -- 12:00 79F
    -- 13:00 79F
    -- 14:00 81F
    -- 15:00 81F
  
  - [Day 2] 
    -- 10:00 81F
    -- 11:00 79F
    -- 12:00 75F
    -- 13:00 75F
    -- 14:00 73F
    -- 15:00 73F
 
2. 2차원 배열을 이용하여 변수 temperAvg를 생성,선언하세요.
3. for Loop를 이용해서 2차원 배열을 연산하는 function CalMatrix를 작성하세요.
4. 3의 function CalMatrix과 consol.log()를 이용해서 temperAvg를 printout하세요. 
```
- Input : 2일치, 6개 시간대의 평균 기온 데이터
- Process : array, 2d array, console.log
- Output : 1일차와 2일차의 각 시간대별 평균기온을 출력
```
[New]
**Day 1 : Arrays**
1. 아래의-평균 기온(Farenheit)데이터를 이용하세요.(F 단위는 삭제해도 무방)
  - [Day 1] 
    -- 10:00 72F
    -- 11:00 75F
    -- 12:00 79F
    -- 13:00 79F
    -- 14:00 81F
    -- 15:00 81F
  
  - [Day 2] 
    -- 10:00 81F
    -- 11:00 79F
    -- 12:00 75F
    -- 13:00 75F
    -- 14:00 73F
    -- 15:00 73F
 
2. 시계열 데이터임을 고려해서 3차원 배열을 이용하여 변수 temperAvg를 생성,선언하세요.
3. for Loop를 이용해서 3차원 배열을 연산하는 function CalMatrix를 작성하세요.
4. 3의 function CalMatrix과 consol.log()를 이용해서 temperAvg를 printout하세요. 
```
- Input : 2일치, 6개 시간대의 평균 기온 데이터
- Process : array, 3d array, console.log
- Output : 1일차와 2일차의 각 시간대별 평균기온을 출력
```

**Day2 : Arrays**

**I. General Arrays**
1. 아래의 나이, 이름 데이터를 이용해서 friends변수를 생성하세요.
{ name: 'John', age: 30 }, { name: 'Ana', age: 20 }, { name: 'Chris', age: 25 }
2. array와 if문을 사용해서 나이 비교문이 포함된 compareFriends 함수를 작성하세요.
3. sort와 consol.log()를 이용해서 나이순으로 이름을 정렬하고 printout하세요.
```
- Input : 3명의 나이, 이름 데이터
- Process : array, sort, console.log
- Output : 나이순 이름 정렬 출력
```
**II. Arrays and Sort in TypeScipt** 
1. 먼저, Typescript의 Array의 사용법에 대해 학습하세요.
2. 아래의 나이, 이름 데이터를 이용하세요.
{ name: 'John', age: 30 }, { name: 'Ana', age: 20 }, { name: 'Chris', age: 25 }
3. Person interface를 작성하세요.
4. array를 이용해서 friends 변수를 선언, 생성하세요.
5. 3,4를 이용하여 compareFriends 함수를 작성하고, 나이순으로 이름을 정렬하고 printout하세요. 
```
- Input : 3명의 나이, 이름 데이터
- Process : array, sort, console.log in TypeScipt
- Output : 나이순 이름 정렬 출력
```

**III. Stacks**
1. 다음의 메서드들의 사용법을 완전히 숙지하세요. 
  - push(), pop(), peek(), isEmpty(), clear(), size() 
2. 10진수를 2진수로 변환하는 function인 decimalToBinary()를 작성하세요.
3. 아래의 조건 아래 함수를 작성 하세요
  - Stack 클래스를 사용하세요.
  - while, push(). pop(). Math.floor()를 사용하세요 
4. 10진수 233, 10, 1000를 각각 2진수 값으로 변환 출력하세요.
  - 2의  decimalToBinary() 함수를 이용하세요.
  - 출력은 consol.log()를 사용하세요.
```
- Input : 10진수 233, 10, 1000
- Process : Stack, while, push(). pop(). Math.floor(), console.log in 
- Output : 233, 10, 1000의 2진수 값
```

**Day3 : Queues**

**I. General Queues & Dequeues**
1. Enqueue의 이해를 위해 아래 메서드에 대해서 확실하게 숙지하세요.
  - enqueue(), dequeue(), peek(), isEmpty()
2. Dequeue의 이해를 위해 아래 메서드에 대해서 확실하게 숙지하세요.
  - addFront(), addBack(), removeFront(), removeBack(), peekFront(), peekBack()


**II. Circular Queues**
1. Hot Potato 게임을 Circular Queues로 구현하세요. 게임의 원리는 아래와 같습니다.
2. 각자 참가자는 원을 그리며 구성되어 있으며, 가능한 한 빨리 이웃에게 뜨거운 감자를 전달함.
3. 게임의 특정 지점에서 뜨거운 감자가 참가자의 원 주위를 지나가는 것을 멈추고 뜨거운 감자를 가진 참가자는 Circle에서 제거됨.
4. 이 작업은 자식 (승자)이 한 명만 남을 때까지 반복됨
5. 참가자는 다음과 같습니다. 
  - 'John', 'Jack', 'Camila', 'Ingrid', 'Carl'
6. 제거자와 최종 승자를 아래와 같이 출력하세요. 
  - ` $'name' was eliminated from the Hot Potato game.`
  - `The winner is: $'name'. `
7. for loop, enqueue, dequeue, array, push, console.log()를 이용하세요.
```
- Input : 'John', 'Jack', 'Camila', 'Ingrid', 'Carl'
- Process : for loop, enqueue, dequeue, array, push, console.log()
- Output : ` $'name' was eliminated from the Hot Potato game.` / `The winner is: $'name'. 
```

**Day4 : Linked Lists**

**I. Linked Lists General**
1. push(), insert(), getElementAt(), remove(), indexOf(), removeAt()의 원리와 사용법에 대해 학습하고 숙지하세요
2. size(), toString()의 원리와 사용법에 대해 학습하고 숙지하세요.

**II. Linked Lists Basic**
1. current 데이터와 next 데이터를 담는 ListNode 클래스를 작성하세요.(생성자 필수)
2. 순서상으로 다음 노드의 current값은 이전 노드의 next값입니다.
3. 각 노드의 다음 데이터 초기값은 null입니다.
4. 각 노드의 현재값은 4, 7, 8, 10입니다.
5. for 루프를 사용한, 노드의 next 데이터를 출력하는 printList function을 만드세요.
6. 4에서 입력한 첫번째 노드가 printList를 통한, 결과값을 출력하고, 확인하세요.
7. 주석을 잊지 마세요.
```
- Input : 4(node1), 7, 8, 10
- Process : class ListNode(), function printList()
- Output : printList(node1) 
```

**III. Linked Lists Advanced**
1. II에서 작성한 ListNode를 사용합니다.
2. 원래 처음의도는의 노드 현재 데이터 초기값은 1, 3, 4입니다. 
3. 노드의 다음 데이터 출력을 위해 root 변수를 선언하고 사용하세요.
4. while문을 추가해서 II에서 작성한 printList함수를 수정하고, 2번이 출력되도록 코딩하세요.
5. 이제, 새로운 노드의 현재 데이터를 추가하여 1, 2, 3, 4가 되도록 만들려고 합니다.
6. 노드의 다음 데이터 출력을 위해 root 변수 선언 후 사용하세요.
5. 수정한 printList함수를 이용하여 5번이 출력되도록 코딩하세요.
6. 주석을 잊지 마세요.
```
- Input : 1, 3, 4  / 1, 2, 3, 4       
- Process : class ListNode(), function printList()
- Output : printList(root) 
```

**Day5 : Sets**

**I. Sets General**
1. add(element), delete(element)의 원리와 사용법에 대해 학습하고 숙지하세요
2. has(), clear(), size(), values())의 원리와 사용법에 대해 학습하고 숙지하세요.
3. Sets의 중요한 기능들인 Union, Intersection, Difference, Subset에 대해 Notion에 페이지를 만들어 정리하고, 숙지하세요.
   정리할 Notion 페이지 >> https://www.notion.so/beingbetterone/Programming-Language-Frameworks-c9dda106572d496da0966f179328d529

**II. Sets Basic 1**
1. 다음의 프로세스를 수행하는 function sizeLagacy()를 작성하세요.
2. 각 아이템 개체의 property를 수동으로 추출하고 그 property의 수를 계산하여 이 수를 반환하여 출력하세요.
3. items, hasOwnProperty(element)를 이용한다.
4. 주석을 잊지 마세요.

**III. Sets Basic 2**
1. 다음의 프로세스를 수행하는 function valueLagacy()를 작성하세요.
2. 각 아이템 객체의 모든 property를 iteration하고 array에 추가 한 후, 그 배열을 반환하여 출력하세요.
3. items, hasOwnProperty(element), push를 이용한다.
4. 주석을 잊지 마세요.

**IV. Sets Advnaced 1**
1. SetA {1,2,3} SetB{3,4,5}을 사용하세요.
2. Set과 Union을 이용해서 SetA와 SetB의 Union을 구하고 출력하세요.
3. 주석을 잊지 마세요.

**V. Sets Advanced 2**
1. Intersection기능을 하는 function intersection()를 작성하세요.
2. value(), length(), add(), include()를 숙지하고 사용하세요.
3. intersection()을 사용해서 setA [1, 2, 3, 4, 5, 6, 7]와 setB [4, 6]의 intersection을 출력하세요.
4. 주석을 잊지 마세요.
```
- Input : setA [1, 2, 3, 4, 5, 6, 7] setB [4, 6]      
- Process : intersection()
- Output : result of intersection between setA and setB
```

**Day6. Dictionaries** 

**I. Dictionary Basic** 
1. Dictionary class를 학습하고 숙지하세요. 
  * 앞으로 매우 빈번하게 사용할 클래스이므로, 아주 주의깊게 살펴보고 이해해야 합니다.
2. 다음의 메서드들이 **어떻게 동작하는지 실제로 동작하는 코드를 그대로 필사하여(no c+v) 작성**하면서 이해해 보세요. 
    * set(key, value)
    * remove(key): 
    * hasKey(key): 
    * get(key): 
    * keys(): 
    * values():
    * keyValues(): 
3. 아래 데이터들을 dictionary 의 key-value로 dictionary를 생성해서 담고, 하단의 항목들을 출력해보세요.
  * ’Gandalf' - ‘gandalf@email.com'
  * 'John'-'johnsnow@email.com'
  * 'Tyrion'-'tyrion@email.com’ 
  
  * hasKey('Gandalf') 
  * hasKey('John')
  * dictionary.size()
  * dictionary.keys()
  * dictionary.values()
  * dictionary.get('Tyrion')
4. 위의 데이터들을 이용해서 다음 플로우도 출력해서 확인하세요
  * dictionary.remove('John')
  * dictionary.keys()
  * dictionary.values()
  * dictionary.get('Tyrion')
5. forEach함수를 아래와 같이 사용해서 작성하고, 결과값을 확인해 보세요.
  * 
    ```
    dictionary.forEach((k, v) => { 
    console.log('forEach: ', `key: ${k}, value: ${v}`); 
    });
    ```
6. 지금까지 수행한 작업을 바탕으로 왜 dictionary가 앞으로의 작업에서 중요할지를 각자 근거(최소 3가지 이상)를 들어서 설명해 보세요.

**Day7. HashTable** 
* HashTable도 Dictionary와 함께 앞으로 매우 빈번하게 사용할 클래스이기 때문에, 매우 주의 깊게 살펴서 이해하고 사용법을 숙지해야 합니다.
**I. HashTable Basic** 
1. HashTable class를 학습하고 숙지하세요. 
2. HashTable과 Dictionary의 특징 중 공통점과 차이점을 확인하고, 정리하세요.

**II. HashTable Basic 2**
1. 아래와 같이 HashTable을 이용한 코드를 작성하세요. 
  ```
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
  ```
2. hash.hashCode() 메서드를 이용해서 각 이름에 해당하는 hash table의 주소를 출력하세요.
3. toString() 메서드의 구조를 확인하고, 필사하고 주석을 달아서 원리를 익히세요.
4. 3의 toString()과 console.log()를 이용해서 1에서 입력한 hashTable의 value및 table 주소값을 출력하세요.

**Day8. HashTable II**
**I. HashTable Advance**
1. Separate chaining을 이해하고, 숙지하세요. 
  - HashTableSeparateChaining 클래스에 대해서 학습하고, 필사해서 코딩한후, 주석을 통해 각 라인의 의미를 설명하세요.
2. Linear probing을 이해하고 숙지하세요.
  - HashTableLinearProbing 클래스에 대해서 학습하고, 필사해서 코딩한후, 주석을 통해 각 라인의 의미를 설명하세요.
3. Separate chaining과 Linear probing의 차이를 설명하세요.
4. 가이드를 따라 코드를 작성하세요 : Separate chaning
  1) class HashTableSeparateChaining, put(), toString(), console.log()를 이용하여 다음의 값이 출력되도록 코드를 작성하세요. 
      {4 => [#Ygritte: ygritte@email.com]},
      {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},
      {7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},
      {8 => [#Jasmine: jasmine@email.com]},{9 => [#Jake: jake@email.com]},
      {9 => [#Jake: jake@email.com]},
      {10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}
  2) 1)에서 작성한 코드에 기반해서 remove(), get(), toString(), console.log()를 이용하여 다음의 값이 출력되도록 코드를 작성하세요. 
      {5 => [#Jonathan: jonathan@email.com],[#Jamie: jamie@email.com],[#Sue: sue@email.com],[#Aethelwulf: aethelwulf@email.com]},
      {7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},
      {8 => [#Jasmine: jasmine@email.com]},
      {9 => [#Jake: jake@email.com]},
      {10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}  
  3) 2)의 코드에 기반하여 remove(), get(), toString(), console.log()를 이용하여 다음의 값이 출력되도록 코드를 작성하세요. 
       {5 => [#Jonathan: jonathan@email.com]},
       {7 => [#Jack: jack@email.com],[#Athelstan: athelstan@email.com]},
       {8 => [#Jasmine: jasmine@email.com]},
       {9 => [#Jake: jake@email.com]},
       {10 => [#Nathan: nathan@email.com],[#Sargeras: sargeras@email.com]}        
5. 가이드를 따라 코드를 작성하세요 : 
  1) class HashTableLinearProbing, put(), toString(), console.log()를 이용하여 다음과 같이 출력되도록 코드를 작성하세요.
      {4 => [#Ygritte: ygritte@email.com]},
      {5 => [#Jonathan: jonathan@email.com]},
      {6 => [#Jamie: jamie@email.com]},
      {7 => [#Jack: jack@email.com]},
      {8 => [#Jasmine: jasmine@email.com]},
      {9 => [#Jake: jake@email.com]},
      {10 => [#Nathan: nathan@email.com]},
      {11 => [#Athelstan: athelstan@email.com]},
      {12 => [#Sue: sue@email.com]},
      {13 => [#Aethelwulf: aethelwulf@email.com]},{14 => [#Sargeras: sargeras@email.com]}
  2) 1)의 코드에 기반해서 remove(), get(), toString(), console.log()를 이용하여 다음과 같이 출력되도록 코드를 작성하세요. 
      {5 => [#Jamie: jamie@email.com]},
      {6 => [#Sue: sue@email.com]},
      {7 => [#Jack: jack@email.com]},
      {8 => [#Jasmine: jasmine@email.com]},
      {9 => [#Jake: jake@email.com]},
      {10 => [#Nathan: nathan@email.com]},
      {11 => [#Athelstan: athelstan@email.com]},
      {12 => [#Aethelwulf: aethelwulf@email.com]},
      {13 => [#Sargeras: sargeras@email.com]} 
**II. Database**
  1.  다음을 이해하고 정리하세요. 
  * Notion https://www.notion.so/beingbetterone/Programming-Language-Frameworks-c9dda106572d496da0966f179328d529
  - DB Table 
  - DB Key 
  - DB Data Field
  - DB Data type
  2. Data Modeling 에 대해 이해하고 다음을 정리하세요.
  - EDM
  - Logical Model
  - Pysical Model
