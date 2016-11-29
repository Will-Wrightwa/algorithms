//Q: Create a function tat takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

//A:
function printLowReturnHigh(arr) {
    if (arr.length === 0){return null}
    var high = arr[0]
    var low = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i]
        }
        if (arr[i] < low) {
            low = arr[i]
        }
    }
    console.log(low);
    return high
}
console.time('a')
var n = printLowReturnHigh(bigArr(100))
console.timeEnd('a')
console.log(n,'##');

//A2:
function printLowReturnHigh2(arr){
    console.log(Math.min(...arr))
    return Math.max(...arr)
}
console.time('b')
var n = printLowReturnHigh2(bigArr(100))
console.timeEnd('b')
console.log(n,'##');



function bigArr(n){
    var out = []
    for (var i = 0; i < n; i++) {
        out.push(i)
    }
    return out
}
