// there are main four types of conditions
// if, if else, else if, switch .

// **************** if condition

let items = 40;
// when items greater than or equal to 50 .
if (items > 50) {
  console.log("stock is available");
}

//************* if else condition
if (items >= 50) {
  console.log("stock is available");
} else {
  console.log("Limited stock is available");
}

//*********************** else if consition : mulity conditions use
if (items >= 50) {
  console.log("stock is available");
} else if (items >= 20 && items <= 50) {
  console.log("few items are left");
} else if (items >= 1 && items <= 20) {
  console.log("Hurry up few stock is available");
} else {
  console.log("out of stock");
}

//************* switch conditions

let marks = 70;

switch (marks) {
case 35:
    document.write("pass");
    break;
case 50:
    document.write("third class");
    break;
case 60:
    document.write("second class");
    break;
case 75:
    document.write("distintion");
    break;
default:
    // document.write("fail");
    break;
}
// break; if we dont write break it will continue excute all the cases. 