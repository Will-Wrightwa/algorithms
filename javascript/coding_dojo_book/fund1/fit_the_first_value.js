//Q: your function should accept an array. If value at [0]  is greater than the array's length then print "Too big" If it is smaller than the arrays length print "Too small" otherwise pring "Just right!"

//A:
function(arr){
    if(arr[0] > arr.length){
        console.log('Too big')
    }else if (arr[0] < arr.length){
        console.log('Too small!')
    }else{
        console.log('Just right');
    }
}
