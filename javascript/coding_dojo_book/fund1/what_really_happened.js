// Q: kyle (smarter than kenny) notes that the chance of one disaster is totally unrelated to the chance of another. Change whatHappensToday() function to test for each disaster independently. instead of assuming that exactly one disaster will happen.

function whatHappensToday() {
  rand = () => Math.random()*100
  if(rand() < 10){console.log('volcano')}
  if(rand() < 15){console.log('tsunami')}
  if(rand() < 20){console.log('earthquake')}
  if(rand() < 15){console.log('blizzard')}
  if(rand() < 30){console.log('meteor')}
}
whatHappensToday()
