//Q: Kenny tries to stay safe, but somehow everyday something happens. If there is a 10% chance of volcano 15% chance of tsunami, 20% chance of earthquake , 25% chance of blizzard, and 30% chance of meteor strice, write a function what HappensToday() to print the outcome

function whatHappendsToday() {
  prob = Math.floor(Math.random()* 100)
  if(prob <= 10 ){
    console.log("volcano");
  }else if (prob <= 25) {
    console.log("tsunami");
  }else if( prob <= 45){
    console.log('earthquake');
  } else if( prob <= 70){
    console.log('blizzard');
  } else{
    console.log('meteor strike');
  }
  return
}
