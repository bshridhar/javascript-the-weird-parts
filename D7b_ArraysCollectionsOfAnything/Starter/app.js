var arr = [
    1,
    false,
    {
        name: 'Shridhar',
        city: 'bangalore'
    },
    function(name) {
        var greetings = 'Hello ';
        console.log(greetings + name);
    },
    'Hola !'
];

console.log(arr);

arr[3](arr[2].name);