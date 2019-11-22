function mapForEach(arr, fn) {
    var newArr = [];
    for(var i =0; i < arr1.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }

    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr3);

var checkPastLimiter = function(limiter, item) {
    return item > limiter;
};
var arr4 = mapForEach(arr1, checkPastLimiter.bind(this, 1));
console.log(arr4);

var checkPastLimiterSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};
var arr5 = mapForEach(arr1, checkPastLimiterSimplified(0));
console.log(arr5);
