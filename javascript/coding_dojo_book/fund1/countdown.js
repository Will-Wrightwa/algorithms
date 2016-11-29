//Q: Create a function that accepts a number as an input Return an array that counts down by one. from the number(as arrays zeroth element) to 0 as the last element how long is the arrays

//A:
function countdown(n){
    out = []
    for(let i = n ; i >= 0; i--){
        out.push(i)
    }
    return out
}
//test
console.log(countdown(5));
