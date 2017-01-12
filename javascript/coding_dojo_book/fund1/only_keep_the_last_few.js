// Q: Stan learned somethingtoday: that reducing an array's .length shortens an array by that amount. Given array and number(call it n), jettison all but the last n elements, and return the (shortened array).
function lastN(arr,n){
  return arr.slice(arr.length-n)
}


function lastN_(arr,n){
  arr = arr.reverse()
  arr.length = n
  arr = arr.reverse()
  return arr
}
