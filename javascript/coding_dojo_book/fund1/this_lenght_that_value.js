//Q: build a function that takes two numbers num1 and num2. It should return an array of length num1 where each value is num2.

//A:
function thisLengthThatValue(num1,num2) {
    out = []
    for (var i = 0; i < num1; i++) {
        out[i] = num2
    }
    return out
}
