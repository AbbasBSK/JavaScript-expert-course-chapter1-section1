function browserTest() {
  var browser = prompt("please enter your computer browser");

  switch (browser) {
    case "edge":
      alert("You've got the Edge!");
      break;

    case 'Chrome': // if (browser == "Chrome" ||  browser == "Firefox")
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert('Okay we support these browsers too');
      break;

    default:
      alert('We hope that this page looks ok!');
      break;
  }
}

// var a = prompt('لطفا یک عدد از یک تا 10 وارد کنید');

// if (a == 0  ) {
//   alert( "مقدار وارد برابر با صفر است ... !" );
// }
// if (a == 2 ||a == 4 ||a == 6 ||a == 8 ||a == 10) {
//   alert( "مقدار وارد شده یک عدد زوج است ... !"  );
// }
// if (a == 1 ||a == 3 ||a == 5 ||a == 7 ||a == 9) {
//   alert( "مقدار وارد شده یک عدد فرد است ... !"  );
// }
