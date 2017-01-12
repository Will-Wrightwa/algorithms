// Q: Mr Cerise teaches high school math, Write a function that assigns and rints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ scores get an'A' 80-89 get a 'B' 70-79 is a 'C' 60-69 should get a 'D' and lower than 60 recieve an F.


function grades(n) {
  if(typeof n != 'number'){return 'not a valid grade'}
  if(n >= 90){return 'score: ${n} grade A'}
  if(n >= 80){return 'B'}
  if(n >= 70){return 'C'}
  if(n >= 60){return 'D'}
  return 'F'
}

console.log(grades(99));
