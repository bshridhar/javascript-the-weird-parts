// function statement
function greet(name) {
    console.log('hello ' + name);
}
greet('John')
// function expression
var greetFun = function(name) {
    console.log('hello ' + name);
}
greetFun('John');

// using an Immediately Invoked Function Expression - IIFE
var greeting = function(name) {
    return ('Hello ' + name);
}('John');

console.log(greeting);
// console.log(greeting()); // throws error





// No errors will be thrown - Valid JS statements and expressions
3;
"Hello I am string";
{
    name: 'John';
};


// This function will throw an error
// JS parser will think it as a function statement rather than expression
// function(name) {
//     return ('Hello ' + name);
// };

// Wrap the same function in the paranthesis to trick the parser to consider it as a function expression. Because anything written inside the paranthesis is considered as expression.
var firstname = 'John';
(function(name) {
    var greeting = 'Inside IIFE Hello';
    console.log (greeting + ' ' + name);
}(firstname));


var numbers = [1, 2, 3];

(function(arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log(result);
}(numbers));

var parameter_list;
// IIFE basic structure
(function(arguments_list) {
    // function body goes here
}
// invoke the function by a pair paranthesis()
(parameter_list)
);

// Another IIFE basic structure
(function(arguments_list) {
    // function body goes here
})
// invoke the function by a pair paranthesis().
// However the paramenter list is put outside the first paranthesis
(parameter_list); 











