function greet(whattosay) {
    
    return function(name) {
        console.log(whattosay + ' ' + name);
    }

}

// greet('Hi')('Shridhar');
var sayHi = greet('Hi');

sayHi('Shridhar');