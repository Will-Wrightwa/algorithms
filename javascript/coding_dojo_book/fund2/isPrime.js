// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1
// many highly optimized solutions exist, for now just create one that is easy to reason about and debug.
let c = 1
function isPrime1(n) {
  c = 1
  let i = 2;
  while(i < n){
    if(n % i === 0){return false}
    i++
    c++
  }
  return true
}


console.log(isPrime1(1112237));
console.log(c);

function isPrime2(n) {
  c = 1
  let i = 2;
  while(i < n/2){
    if(n % i === 0){return false}
    i++
    c++
  }
  return true
}
console.log(isPrime2(1112237));
console.log(c);
