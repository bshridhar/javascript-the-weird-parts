function sayHiLater() {
    var sayHi = 'Hi !';

    setTimeout(function() {
        console.log(sayHi);
    }, 3000);
}

sayHiLater();


function tellMeWhenDone(callback) {
    var a = 1;
    var b = 2;

    callback();
} 

tellMeWhenDone(function() {
    console.log('I am done');
});

tellMeWhenDone(function() {
    console.log('All done');
});