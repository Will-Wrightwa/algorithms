// Q: Creat a function th generate Fibonacci numbers in this famous mathematical sequence, each number is the sum of the previos two, starting with values 0 and 1. Your function should accept one argument an index into the sequence(where 0 corresponds to the initioal value, 4 correspondst to the value four later,ect )

function fib(n) {
  let n1 = 1;
  let n2 = 0;
  let out = n1
  for(let i = 1; i < n; i++){
    n2 = n1
    n1 = out
    out = n1 + n2
  }
  return out
}
function fib2(n) {
  let f = [0,1]
  for(let i = 1; i < n; i++){
  [f[0],f[1]] = [f[1], f[0]+f[1]]
  }
  return f[1]
}
function fib3(i,prev=1,prev2=0) {
  if(i<=1){return prev}
  return fib3(i-1,prev+prev2,prev)
}
console.log(fib3(6));
