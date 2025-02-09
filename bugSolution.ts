function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate through the array
user.forEach(name => {
    console.log(greeter(name));
});

// Solution 2: Modify the function signature to accept an array
function greeterArray(people: string[]): string {
    return people.map(person => "Hello, " + person).join('\n');
}
console.log(greeterArray(user));