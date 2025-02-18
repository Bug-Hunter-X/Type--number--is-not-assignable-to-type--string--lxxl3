function greeter(person: string): string {
  return "Hello, "+ person + "!";
}

let user = "Jane User";
console.log(greeter(user)); // Works fine

// Now let's try with a number
let num = 10;
console.log(greeter(num)); // This will throw an error at compile time because num is not a string