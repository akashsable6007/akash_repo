// Difference between let ,var , const 
// let-var-const 

// default is var keyword 

// Scope level diff 
// >>>>>>>>>>>>>>>> let,const  :> block level scope 
// >>>>>>>>>>>>>>>> Var :> function level scope 

function test() {
    let a = 10;
    if(a < 20){
        let b = 30;
        var c = 40;
        const d  = 60;
    }
    console.log(c);
    // console.log(b); // let and const are block level variable they cannot access the value in the fun.
    // console.log(d);
}
console.log(test());

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Redeclaration is not possible with let and var keyword 
// let city = "pune";
// let city = "mumbai";

// With var keyword is possible 
var cityName = "pune";
var cityName = "mumbai";

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Reassignment 
// reassigning value to the variable is possible with let ,var keyword but 
// not possible with const keyword  
let marks = 48;
marks = 86;

const s = 88;
s = 90;

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// hoisting 
//:--> first define value to the variable then declear it;
//:--> hoisting is possible using var keyword 
//:--> hoisting is not-possible using let,const keyword

p = 59;
var p;
// it is possible 

g = 580;
let g;
// it is not possible 

//>>>>>>>> definig value at a time of declaration must with const keyword  
// it is possible with var and let.
 let f;
 f = 44;

 var h;
 h = 36;

 // not possible with const 
//  const u;
//  u = 88; // this is wrong 
const u = 88 ; // this will be accessble 
