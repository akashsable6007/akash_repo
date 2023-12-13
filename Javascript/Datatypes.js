// there are 8 datatypes 
// Primitive Datatype 
//1.string
//2.Number
//3.Boolean
//4.null
//5.undefined
//6.symbol
//7.object
//8.Bigint


// The Object Datatypes
//The object Datatypes can contain:
// Non Primitive Datatype 

//1. An Object
//2. An Array
//3. An date 

// console.log('akash');

//++++++++++++++++++ STRING DATATYPES +++++++++++++++++++++++//

let state = ""; // empty string

let city = "pune"; // string data types

console.log('city 1', city);

city = "mumbai";
console.log('city 2', city);

//++++++++++++++++++ NUMBER DATATYPES +++++++++++++++++++++++++++//
 
console.log(marks);

var MobileNo = "9158385007"; // if we apply double cots here that time number is behave like string at output.
// value is number but datatype is string .
console.log(MobileNo);

//++++++++++++++++++++++++++ BOOLEAN DATATYPES ++++++++++++++++++++++++//
// Boolean only show the True and False value of  Boolean datatypes.


var isFavFruit = true; // boolean true or false
console.log(isFavFruit);

//typeof() >>> it gives type of variable

console.log(typeof(isFavFruit));

//+++++++++++++++++++++++++++++ UNDEFINED TYPE +++++++++++++++++++++++++++++++++++++//

const match = undefined;
console.log(match);

let abc ;
console.log(abc);
//undefined is value also datatype .

//+++++++++++++++++++++++++++++ NULL +++++++++++++++++++++++++++++++++++//

var myName = null;
console.log(myName);
console.log(typeof(myName)); // null/ array value typeof will return >> object.

// datatype of null value is object datatype...

//+++++++++++++++++++++++++++++ Bigint ++++++++++++++++++++++++++++++++//

let a = 9999999999999999;
console.log(a);
 

//************************************* OBJECTS NON-PRIMITIVE DATATYPES *****************************************/

//******** ARRAY
// array :> array is use to store multiple items.

let name = "aakku";
console.log(name);

let cities = []; // Empty array
cities = ['pune', 'aurangabad', 'chandrpur', 'beed'] // This is homogenous array .
console.log(cities);
console.log(typeof(cities)); // datatype of array is object.
console.log(cities[1]); // 1 is called indexnumber
console.log(cities.length); // length is property not function
console.log(cities[0]);
console.log(cities[cities.length - 1 ]);

// In javascript hetrogenous array is allow .
// Homogenous means:>> Contain Same Value 
// Hetrogenous means:>> Contain Mix values
let hetroArray = ['akash', 9158386007, test(), true, null, undefined, 'akash'] //this is hetrogenous array 
console.log(hetroArray[2]);

// ******* In Javascript we can pass function inside array

function test (){
   // return 'poonam'
}

//************ OBJECT DATATYPES */

//let cars = {}; // Empty object // object >> {key::value} 

let cars = {
    carName : "swift",
    carPrice : 800000,
    carColor : "white"
}
console.log(cars.carName);
console.log(cars.carColor);
console.log(typeof(cars)); 






















