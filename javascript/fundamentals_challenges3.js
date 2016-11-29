//11. make a function that accepts three parameters: first, second and last print all the multiples of las from second to first

function multiples(first, second, last) {
    for (let i = first; i < second; i++) {
        if (i % last === 0) {
            console.log(i)
        }
    }
}

//12. write a function that ddetermines whether a given year is a leap year.If a year is divisible four, it is a leap year unless it is divisble by 100. However if it is divisible by 400 then it is.

function isLeapYear(yr) {
    if(yr % 400 === 0){return true}
    if(yr % 100 === 0){return false}
    if(yr % 4 === 0){return true}
    return false
}

//13. print all the odd integers from -300,000 to 300,000
// for (var i = -300000; i <= 300000; i++) {
//     console.log(i)
// }
console.log(0);

//14. construct a function that accepts four parameters. print all ultiples of param1 from param2 to param3 inclusive unles multiple is equal to param4 Use a WHILE loop given (3,5,17,9), print 6, 12, 15

function multiples2(param1, param2, param3, param4) {
    var i = param2
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i)
        }
        i++
    }
}
multiples2(3,5,17,9)

//15. build a function that accepts two numbers. if theyrepresent the month and day you were born - in either order - log "how did you know". otherwise log "Just just another day..."

function bday(n, m) {
    var mybday = 8
    var mybmonth = 2
    if (n === mybday && m === mybmonth) {
        console.log("How did you know?")
        return
    }
    if (m === mybday && n === mybmonth) {
        console.log("How did you know?")
        return
    }
    console.log("Just another day...");
}
