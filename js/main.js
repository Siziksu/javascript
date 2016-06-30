function print(value, description) {
    console.log(description === undefined ? value : description + value);
};
function forEach(array, action) {
    if (action === undefined) return;
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
};
function add(numbers, callback) {
    var sum = 0;
    forEach(numbers, function(data) {
        sum += data;
    });
    callback(sum);
};
