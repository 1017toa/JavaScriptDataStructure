// Day2 : Arrays
// I. General Arrays

const {isTemplateSpan} = require('typescript');

var friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25},
];

function compareFriends() {
  if (friends[0].age > friends[1].age) {
    console.log(`${friends[0].name} is older than ${friends[1].name} `);
  } else {
    console.log(`${friends[1].name} is older than ${friends[0].name} `);
  }
}

compareFriends();

var sortingFriends = 'age';

friends.sort(function (a, b) {
  return b[sortingFriends] - a[sortingFriends];
});

console.log(friends);

// Day2 : Arrays
// II. Arrays and Sort in TypeScipt
function compareFriends() {
  var friends = [
    {name: 'John', age: 30},
    {name: 'Ana', age: 20},
    {name: 'Chris', age: 25},
  ];
  friends.sort(function (a, b) {
    return b.age - a.age;
  });
  console.log(friends);
}
compareFriends();

// III. Stacks
class Stack {
  constructor() {
    this.dataStore = [];
  }
  push(element) {
    this.dataStore[this.dataStore.length] = element;
  }
  pop() {
    return this.dataStore.pop();
  }
  peek() {
    return this.dataStore[this.dataStore.length];
  }

  isEmpty() {
    return this.dataStore.length === 0;
  }

  clear() {
    this.dataStore = [];
  }

  size() {
    return this.dataStore.length + 1;
  }

  decimalToBinary() {
    return this.pop().toString(2);
  }
}
function binary() {
  const stack = new Stack();
  stack.push(233);
  stack.push(10);
  stack.push(1000);

  while (stack.dataStore.length > 0) {
    console.log(stack.decimalToBinary());
  }
}

binary();
