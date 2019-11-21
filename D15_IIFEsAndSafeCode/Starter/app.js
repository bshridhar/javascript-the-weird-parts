// IIFE
(function (global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hi';

    console.log(greeting + ' ' + name);
}(window, 'John'));      // IIFE


console.log(greeting);



















