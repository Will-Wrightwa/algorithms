// Q: for array [1,3,5,7,9,13] print the numbers that are greater than its second value print how many values that is. what will you do if the array is only 1 element long

//A:
var arr = [1,3,5,7,9,13]
var count = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[1]){
        console.log(arr[i]);
        count++
    }
}
console.log(count);
