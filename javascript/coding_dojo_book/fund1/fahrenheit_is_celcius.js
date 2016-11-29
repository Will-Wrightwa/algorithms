function farhenheitToCelcius(fDeg) {
    return (fDeg -32)* (5/9)
}
function celciusToFahrenheit(cDeg) {
    return (9/5 * cDeg) + 32
}

//Q: is there an integer that is the same temperature for both Fahrenheit and Celcius scales? User your functions above to find this value.
temp = -400
while(temp < 10000){
    if(celciusToFahrenheit(temp) === farhenheitToCelcius(temp)){
        console.log(temp);
        break
    }
    temp ++
}
