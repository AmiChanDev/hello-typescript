// types
let age: number = 22;
let userName: string = "Ami";
let isActive: boolean = true;

let numbers: number[] = [1, 2, 3, 4, 5];
let user: [string, number] = ["Ami", 22];

function greet(name: string): string {
  return `Hello ${name}`;
}

interface User {
  userName: string;
  age: number;
}

let Ami: User = { userName: "Ami", age: 21 };

console.log(Ami.age, " ", Ami.userName);
console.log(greet("Ami"));
