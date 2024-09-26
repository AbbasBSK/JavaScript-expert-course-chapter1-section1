var weight = prompt("لطفا وزن خود را به کیلوگرم وارد کنید");
var height = prompt("لطفا قد خود را به متر وارد کنید");
var gender = prompt("لطفا جنسیت خود را با یکی از واژه های رو برو وارد کنید:" +  "آقا" + " - " + "خانم" );


var uweight = Number(weight);
var uheight = Number(height)/100;

var BMI = uweight/(uheight**2);



if (gender == "آقا") {

    if (BMI >= 18 && BMI <25) {
        alert("وزن شما متناسب می باشد" + " " + BMI);
    }else if(BMI < 18 ){
        alert("شما لاغر هستید" + " " + BMI);
    }else{
        alert("شما اضافه وزن دارید" + " " + BMI);
    }

} else if (gender == "خانم"){
    if (BMI >= 20 && BMI <28) {
        alert("وزن شما متناسب می باشد" + " " + BMI);
    }else if(BMI < 20 ){
        alert("شما لاغر هستید" + " " + BMI);
    }else{
        alert("شما اضافه وزن دارید" + " " + BMI);
    }

}else{
    alert("!!اطلاعات وارد شده صحیح نمی باشد");
}






















