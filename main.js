// function myName(a ,b) {


//   alert((`my nam is ${a} and my age is ${b} years old`));
// }


// myName("mohammad" , 6);

var yourName = prompt("please insert your name :");
var age = prompt("please insert your age :");
var bool = confirm("enter ok or cancel:");


function myName(a , b , c) {
  
  if (c == true) {
    alert(`my nam is ${a} and my age is ${b} years old`)
  }else{
    alert("error..............!");
  }
}

myName(yourName , age , bool);































