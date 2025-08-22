// Union, Intersection
let input: string | number;

input = "Hello";
input = 25;

console.log(input);

// Type Aliases
type ID = string | number;
let userId: ID = 123;

console.log(userId);

// Enums
enum Role {
  Admin,
  User,
  Guest,
}

let role: Role = Role.Admin;

console.log(role); //prints the index number

// Generics !#

function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(10);
let stringVal = identity<string>("String");
console.log(num, stringVal);
