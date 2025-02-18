function greeter(person: string | number): string {
  if (typeof person === 'string') {
    return "Hello, "+ person + "!";
  } else {
    return "Hello, "+ person.toString() + "!";
  }
}

let user = "Jane User";
console.log(greeter(user));

let num = 10;
console.log(greeter(num));

//Alternative with Type Assertion
function greeter2(person: string | number): string {
  return "Hello, "+ (person as string) + "!";
}
console.log(greeter2(num)); //This will also work. However use type guards for better type safety.