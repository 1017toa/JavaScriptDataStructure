// Day2 : Arrays
// II. Arrays and Sort in TypeScipt

function compareFriends(): void{
    let friends: Person[] =   [
        { name: "John", age: 30 },
        { name: "Ana", age: 20 },
        { name: "Chris", age: 25 },
      ];

    friends.sort((a: Person, b: Person): number => {
        return b.age - a.age;
    });
    console.log(friends);
}

compareFriends();

interface Person
{
    name : string;
    age : number;
}

