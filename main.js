var browser = prompt("please enter your computer browser");

switch (browser) {
  case "edge":
    alert( "You've got the Edge!" );
    break;

  case 'Chrome': // if (browser == "Chrome" || browser == "Firefox")
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
    break;
}
