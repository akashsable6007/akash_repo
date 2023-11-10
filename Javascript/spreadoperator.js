//
// syntax 
// The javascript sprade operator (...) allows us to quickly copy all or
// part of an existing array or object into another.

let num = [40, 50, 60, 40, 80, 70]
// let num2 = []

// num.forEach(ele=>{
//     num2.push(ele);
// })
// console.log(num2);
//this is one method 

//spread () using 

let num2 = [...num]
console.log(num2);

//part copying in many arrays 
// part element copy 
let [item1, item2, ...item3] = num ;
  // item=40, item2=50, item3=reaming all values 
console.log(item1);
console.log(item2);
console.log(item3);

// Concatination of two array 
let color1 = ['red', 'black', 'white']
let color2 = ['pink', 'blue', 'green']

let color3 = [...color1, ...color2]
console.log(color3);

//>>>>>> sprad is OBject
let emp = {
    name: "akash",
    age: "22",
    city: "pune"
};

let emp2 = {...emp};
console.log(emp2);

// we dont use sprade operator in object 
// use spread op if keys are diffferent in the both object 

//mergeing object with both eachother 



