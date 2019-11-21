function greet(fname, lname, language) {
    language = language || 'KA';

    if(arguments.length === 3) {
        console.log('Missing parameters');
        console.log('--------------------');
        return;
    }
    console.log(fname);
    console.log(lname);
    console.log(language);
    console.log(arguments);
    console.log('-------------------------------');
}

// greet();
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'ES');

function greetings(fname, lname, language) {
    language = language || 'KA';
    console.log(fname);
    console.log(lname);
    console.log(language);
    console.log(arguments);
    console.log('-------------------------------');
}

var details = ['John', 'Doe', 'ES'];
greetings(...details);
