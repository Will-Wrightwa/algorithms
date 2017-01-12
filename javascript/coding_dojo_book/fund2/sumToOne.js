// Q: Kaitlin sees beauty in numbers, but also believes that less is more  Implement sumToOne() that sums a given integers digits repeatedly until the sum is only one digit return that one digit.
// Example: sumToOne(928) = 1 because 9+2+8  = 19 and 1+9 = 10 and 1+0 = 1

function sumToOne(n) {
  if(n < 10 && n > -10){return n}
  n = (n+"").split("").reduce((acc,n,i,arr)=>{return acc + parseInt(n)},0)
  return sumToOne(n)
}

console.log(sumToOne(929));
