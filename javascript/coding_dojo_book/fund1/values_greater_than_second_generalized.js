// Q: write a function that accepts any array  and returns a new array with the values that are greater than the second value prin how many values that is.

//A:
function greaterThanSecond(arr) {
    if(arr.length < 2){return -1}
    var out = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            out.push(arr[i])
        }
    }
    console.log(out.length)
    return out
}

var a = [1,3,5,7,9,13]
console.log(greaterThanSecond(a));

//A2:
function greaterThanSecond2(arr) {
    out = arr.filter((x,i,arr)=> x > arr[1])
    console.log(out.length);
    return out
}

console.log(greaterThanSecond2(a));
