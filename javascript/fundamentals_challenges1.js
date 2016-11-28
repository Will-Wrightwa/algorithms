//1. Print all the integers from -52 to 1066. Do this using a for loop.
for (let i = -52; i <= 1066; i++) {
    console.log(i)
}

//2.  Set variable myNumber equal to the value 42. Then set variable myName equal to your name.
// now swap myName and int myName and vice versa.

var myNumber = 42
var myName = 'will'
[myNumber,myName] = [myName,myNumber]

//3. print all the multiples of 6 from 6 to 60,000 doth ths using a while loop

var i = 6
while (i <= 60000) {
    console.log(i)
    i+= 6
}

//4. print all integers from  2,000  to 5,280 inclusive do this using a while loop

i = 2000
while (i <= 5280) {
    console.log(i)
    i++
}

//5. create a function named beCheerfull() whthin this function console.log the string "good morning!" call this function 98 times

function beCheerfull(){
    console.log('good moring!')
}

for (var i = 0; i < 98; i++) {
    beCheerfull()
}
