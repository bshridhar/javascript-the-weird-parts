console.log(this);

function a() {
    console.log(this);
    this.newVariable = 'Hello !';
}
var b = function() {
    console.log(this);
}

a();
console.log(newVariable);
b();

var c = {
    name: 'The C object',
    log: function() {
        var self = this;

        self.name = 'updated C object';
        console.log(self);

        var setName = function(newName) {
            self.name = newName;
        }
        setName('updated again! the C object');
        console.log(self);
    }
};

c.log();