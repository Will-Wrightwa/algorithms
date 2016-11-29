//6. using a for loop print the multiples of 3 from -300 to 0 Skip numbers -3 and -6
for (var i = -300; i <= 3; i++) {
    if( i === -3 || i === -6){continue}
    console.log(i)
}

//7. log positive numbers starting at 2016, counting down by fours (exclude 0), without a for loop
function countDownFrom(n,m=1) {
    if(n <= 0){return}
    console.log(n)
    return countDownFrom(n-m)
}
countDownFrom(2016,4)

//8. print all integers multiples of 5, from 512 to 4096. Afterward, also log how many there where.
var count = 0
for (var i = 512; i <= 4096; i++) {
    if(i % 5 === 0){
        console.log(i)
        count++
    }
}
console.log(count)

//9. print out all integers from 1 to 100. if the number is evenly divisible by 5 print "Coding" instead of the number, if the number is evenly divisible by 10 also print "Dojo"
for (var i = 1; i <= 100; i++) {
    if(i % 5 === 0){
        console.log('Coding')
        if (i % 10 === 0) {
            console.log('Dojo')
        }
    }else{
        console.log(i);
    }
}

//10. Your function will be givin an input paramenter incoming. console.log the value of incoming

function print(incoming) {
    console.log(incoming)
}
print('foo')
