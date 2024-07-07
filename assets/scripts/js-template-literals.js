const name = "Alice";
const age = 25;

// Expression interpolation ${expression}

// Multiline string
const greeting = `Hello, my name is ${name},
and I am ${age} years old.`;

console.log(greeting);
// Output: Hello, my name is Alice,
// and I am 25 years old.

// Tagged template literal example
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return `${result}${string}<strong>${values[i] || ''}</strong>`;
    }, '');
}

const highlightedGreeting = highlight`My name is ${name} and I am ${age} years old.`;
console.log(highlightedGreeting);
// Output: My name is <strong>Alice</strong> and I am <strong>25</strong> years old.