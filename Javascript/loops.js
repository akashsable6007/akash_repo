// there are main four loops is Js
// 1) for loop
// 2) for in loop
// 3) for of loop
// 4) do while loop

// ********** for loop ***********
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");


for( let a = 1 ; a <= 10 ; a++ ){
    console.log(a);
}

// for(;;){
//     console.log("akash"); // this goes in imfinte loops sometimes our system also going to reastart ..
// }


//*********** for in loop ************

 let student = {
    name: 'pooja',
    age : 20,
    city: 'pune'
 }

 // for in loop - it is used to itrate object >> (ES-1 version feature)
// for for object 
 for(let x in student){
    console.log(student[x]); // property access symbol [x]
 }


 //*************** for of loop 
 // for for array
 let color = ['red', 'blue', 'green', 'purple', 'orange', 'black'];
 for (let item of color ){
        console.log(item);
 }

 //************* do while loops 
 let num = 0 ;
 let a = 0 ;
 do{
    console.log(num);
    a++;

 }
 while(a<=5){
    console.log(a);
 }