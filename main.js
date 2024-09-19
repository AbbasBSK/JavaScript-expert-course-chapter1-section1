var number1 = prompt("please enter number 1");
var number2 = prompt("please enter number2");

var num1 = Number(number1);
var num2 = Number(number2);

var sum = num1 + num2;
var difference = num1 - num2;
var multiplication  = num1 * num2;
var division = num1 / num2;

var equalTo = num1 == num2
var notEqualTo = num1 != num2


console.log("جمع دو عدد برابر است با :" + sum);
console.log("تفریق دو عدد برابر است با :" + difference);
console.log("ضرب دو عدد برابر است با :" + multiplication);
console.log("تقسیم دو عدد برابر است با :" + division);
console.log("آیا دو عدد وارد شده باهم برابرند؟:" + equalTo);
console.log("آیا دو عدد وارد شده باهم مخالف هستند؟:" + notEqualTo);

