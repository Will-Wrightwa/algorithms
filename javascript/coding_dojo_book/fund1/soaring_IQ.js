// Q: Your time with us will definatly make you smarter! Let's say a new Dojo student entered with a modest IQ of 101. How smart would that person be at the end of the bootcamp, Iif his IQ rose by .01 on the first day, and then went up by an additional .02 on the second day, up by .03 mor on the third day ect. all the way untill increasing by .98 on his 98th day

function iqIncrease(iq) {
  for (var i = 1; i < 99; i++) {
    console.log(iq,i*0.1);
    iq += i * 0.1
  }
  return iq
}


console.log(iqIncrease(101));
