var num1 = Number(prompt("enter number1 :"));

var sumstring = "+";
var minString  = "-";
var mulString  = "*";
var divString  = "/";

var operator = prompt(`please type operator :
  ${sumstring}
  ${minString}
  ${mulString}
  ${divString}
  `)

  var num2 = Number(prompt("enter number2 :"));


  function result (a) {
    return(`your answer is ${a} `)
  }

  if (operator == sumstring) {
    alert(result(num1 + num2));
  }else if (operator == minString) {
    alert(result(num1 - num2));
  }else if (operator == mulString) {
    alert(result(num1 * num2));
  }else if (operator == divString) {
    alert(result(num1 / num2));
  }else{
    alert("yor type is wrong...!");
  }



