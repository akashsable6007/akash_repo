// There are array methods 
// 1) Array length          9) Array concat()
// 2) Array toString()      10) Array flat()
// 3) Array pop()           11) Array slice()
// 4) Array push()          12) Array splice()
// 5) Array shift()
// 6) Array unshift()
// 7) Array join()
// 8) Array delet()


let city = ['nashik', 'pune', 'akash', 200]; // hetrogenous array 
console.log(city.length); // length opr will return length of an array.

//******** toString method 
console.log(city.toString());

//********* pop() method 
// pops out / delete last item from array and will return the same 
// when we have to remove the last word that time we use the pop method.
console.log(city);
let poppedOutItems = city.pop();
console.log(poppedOutItems);
console.log(city);


// ********* push() method 
// when we have to add the data at the last of array that time we use this method.
// push() to append/add items at the end of array ,will return added items.
// new array length we get in return by push.
let returnedByPush = city.push(500, 'latur');
console.log(city);
console.log(returnedByPush);

//********* shift() method 
// shift() methods removes the first array element and "shift" all other element to lower index.
let color = ['red', 'blue', 'black', 'white'];
let shiftMethodedData = color.shift();
console.log(shiftMethodedData);
console.log(color);

//********** unshift()
// unshift add items 
let color2 = ['pink', 'black', 'green', 'blue'];
let unShiftMethodData = color2.unshift('yellow', 'gray');
console.log(unShiftMethodData);
console.log(color2)

//******* join() method 
let v = ['red', 'pink', 'blue', 'yellow']
let v1 = v.join(' * ');
console.log(v1);

let name = ['akash', 'sable']
let fName = name.join(' ')
console.log(fName);

//**** concat() method 
cl2 = ['black', 'green']
cl3 = ['red', 'orange', 'pink']
let cl4 = cl2.concat(cl3,v);
console.log(cl4);

//******* delete() method :>> undefined holes takes place  
let fruits = ['banana', 'mango', 'oranges', 'apple'];
delete fruits[1];
console.log(fruits);
console.log(fruits.length); // length remains same after deleting items

//********* splice() method 
// indext (where you want add item), count (how many elements want to delete)
const fruits1 = ['banana', 'mango', 'oranges', 'apple'];
//fruits1.splice(1,0,'kiwi'); // only add items here
// when we have to add and delete item at same time
fruits1.splice(1,2,'kiwi');
console.log(fruits1);

//******* slice() method 
const fruits2 = ['banana', 'mango', 'oranges', 'apple', 'kiwi'];
let a = fruits2.slice(1,3);
console.log(fruits2);
console.log(a);