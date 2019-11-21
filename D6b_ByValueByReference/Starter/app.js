// by value (primitives)
var a = 3;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))

var c = {greetings: 'hi'};
var d;

d = c;

c.greetings = 'hello';

console.log(c);
console.log(d);

function changeGreeting(obj) {
    obj.greetings = 'hola';
}

changeGreeting(d);
console.log(c);
console.log(d);

