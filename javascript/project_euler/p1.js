//Q: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

//A:

function multiplesBelowOf(multiples,below) {
    var i = Math.min(...multiples)
    var sum = 0
    while(i < below){
        if(multiples.some((x)=>{return i % x === 0})){
            sum += i
        }
        i++
    }
    console.log(sum);
    return sum
}

console.time('a')
multiplesBelowOf([3,5],1000)
console.timeEnd('a')
