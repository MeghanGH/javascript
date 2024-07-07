function example() {
  const x = 10;
  console.log(x); // 10
  x = 20; // TypeError: Assignment to constant variable.
}
example();

// var
console.log("var");
console.log(x); // undefined (declaration is hoisted, but not initialization)
var x = 5;
console.log(x); // 5

// let
console.log("let");
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10

function example() {
  console.log(x); // ReferenceError
  let x = 10;
  console.log(x); // 10
}
example();

if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ReferenceError (y is block-scoped)

// const
console.log("const");
function example() {
  const x = 10;
  console.log(x); // 10
  x = 20; // TypeError: Assignment to constant variable.
}
example();

if (true) {
  const y = 20;
  console.log(y); // 20
}
console.log(y); // ReferenceError (y is block-scoped)

const obj = { name: "Alice" };
obj.name = "Bob"; // This is allowed
console.log(obj.name); // 'Bob'
