
let num = 1000000


function nPrimes2(n) {
  let primes = []
  next = 2
  while(primes.length < n){
    if(primes.every((x)=>{return next % x !== 0})){
      primes.push(next)
    }
    next++
  }
  return primes.pop()
}
console.time('primes')
let m = nPrimes2(num)
console.timeEnd('primes')
console.log(m);
