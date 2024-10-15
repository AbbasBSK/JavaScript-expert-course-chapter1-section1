var day = prompt("لطفا عدد یکی از روزهای هفته را وارد کنید:");

switch (day) {
  case "0":
     alert("شنبه");
    break;
  case "1":
     alert("یکشنبه");
    break;
  case "2":
     alert("دوشنبه");
    break;
  case "3":
    alert("سه شنبه");
    break;
   case "4":
     alert("چهارشنبه");
    break;
  case "5":
     alert("پنج شنبه");
    break;
  case "6":
     alert("جمعه");
    break;

  default:
    alert("عدد وارد شده صحیح نیست");
    break;
}


// if (day === 0) {
//   alert("شنبه");
// }else if (day == 1) {
//   alert("یکشنبه");
// }else if (day == 2) {
//   alert("دوشنبه");
// }else if (day == 3) {
//   alert("سه شنبه");
// }else if (day == 4) {
//   alert("چهارشنبه");
// }else if (day == 5) {
//   alert("پنج شنبه");
// }else if (day == 6) {
//   alert("جمعه");
// }else {
//   alert("عدد وارد شده صحیح نیست");
// }