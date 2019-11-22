String.prototype.isLengthGreaterThan = function(limit) {
    return this.length >= limit;
}

console.log('John'.isLengthGreaterThan(4));

Number.prototype.isPositive = function() {
    return this > 0;
}
var a = -3;
console.log(a.isPositive());