var num1 = Number(prompt("enter number1 :"));
var num2 = Number(prompt("enter number2 :"));

var sumString = "sum";
var minString = "min";
var mulString = "mul";
var divString = "div";


var operator = prompt(`please type operator:
  ${sumString}
  ${minString}
  ${mulString}
  ${divString}`);


  function result(a) {
    return(`yor answer is ${a}`) ;
  }


  if (operator == sumString) {
   alert(result(num1 + num2)); 
  }else if (operator == minString) {
    alert(result(num1 - num2)); 
  }else if (operator == mulString) {
    alert(result(num1 * num2)); 
  }else if (operator == divString) {
    alert(result(num1 / num2)); 
  }else{
    alert("yor type is wrong...!")
  }
































