// 1. ვაცხადებთ ფუნქციას getSum
function getSum(){
let number1 = 15;
let number2 = 25;
let totalSum = number1 + number2;
console.log("ორი რიცხვის ჯამი არის:", totalSum);
document.getElementById("result-box").innerText = totalSum;
}
getSum();