function makeGreeting(language) {
    return function(fname, lname) {
        if(language === 'en') {
            console.log('Hello ' + fname + ' ' + lname);
        }
        if(language === 'es') {
            console.log('Hola ' + fname + ' ' + lname);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Shridhar', 'Baddur');
greetSpanish('Shridhar', 'Baddur');