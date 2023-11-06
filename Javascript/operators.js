//+++++++++++++++++++++++++ OPERATORS ++++++++++++++++++++++//

// = :>> assignment operator --to assign value to the variable.
// == :>> Equality operator --to compare value of two variable.
// === :>> Equality operator --it will compare value as well as datatype..

let a = 40; // assignment operator e.g 

let b = "30";

console.log(a == b); // only value
console.log(a === b); // it will strictly check value and datatype.

let c = 20;
let d = 30;

console.log(c != d); //true  // ! not operator !true >> false ; !false >>true 
console.log(c !== d);  //true 

let isFav = true;
console.log(!isFav); //false

let e = 40;
let f = "50";

console.log(">", e > f); //false // it will check only for values 
console.log("<", e < f); //true

console.log("<=", e <= f); // true  // less than  equal to operator. 


//++++++++++++++++++++ logical And , Logical OR +++++++++++++++++++++++//
// && : True && True :--> True , else  false 
// 

console.log(e < f && f > e); // True 
console.log(e < f && f == e); // false 
console.log(e > f && f == e); // false 

// OR :--> ||
// false || true :--> true 
// false || false :--> false 
// other all conditions are true 
console.log(e < f || f == e); //true 
console.log(e > f || f == e); // false 
console.log(e > f || f == e && a != b); // false 
console.log(a !== b); // check value and datatypes 


let x = 20;
let y = 30;
let res = x + y;
console.log(res);















