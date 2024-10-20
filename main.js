function browserTest() {
  var browser = prompt("please enter your computer browser");

  switch (browser) {
    case "edge":
      alert("You've got the Edge!");
      break;

    case 'Chrome': // if (browser == "Chrome" || browser == "Firefox")
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

// var a = prompt('لطفا یک عدد وارد کنید');

// if (a == 0) {
//   alert( "مقدار وارد شده صفر است ... !" );
// }
// if (a == 1) {
//   alert( "مقدار وارد شده یک است ... !"  );
// }

// if (a == 2 || a == 3) {
//   alert( "مقدار وارد شده دو است ... !"  );
// }

