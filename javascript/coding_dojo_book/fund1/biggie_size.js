//Q: given an array write a function that changes all the positive numbers in the array to "big"

//A:
function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            arr[i] = 'big'
        }
    }
    return arr
}
console.log(biggieSize([1,5,-2,7,-3,0]));

//A2:
function biggieSize2(arr) {
    return arr.map((x)=> x > 0 ? 'big': x)
}

console.log(biggieSize2([1,5,-20,7,-3,0]));
