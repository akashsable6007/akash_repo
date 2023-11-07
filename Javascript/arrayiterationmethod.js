// +++++++++ simple logic to sperate the no from aaray we use simple 
// logic of for loops 

const number = [45, 4, 9, 16, 25, 45, 54];
let num = [];
for(i = 0; i < number.length ; i++){
    if(number[i] != 9){
        num.push(number[i])
    }
}
console.log(num);

// this we can using arrayiterration method in simple way 
//++++++++++++++++ forEach() method 

let num2 = [];
number.forEach(item => {
    if(item != 9){
        num2.push(item)
    }
})
 console.log(num2);
 // break and contiue keywords we cannot use in forEach loop

 //++++++++++++ Break and Continue keyword 
 num = [];
for(i = 0; i < number.length ; i++){
    if(number[i] == 16){
        break;  // breaksout looping
    }
    num.push(number[i])
}
console.log(num);

let item = [1, 2, 3, 4, 5, 6, 7, 8, 9];
item.forEach(ele => {
    if(ele >= 3 && ele <= 6){
        document.write(ele, '<br>');
    }
})
// console.log(item);


//+++++++++++++ find() method 
// it will return first match that passes your test condition 
let item1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
let no = item1.find(item => {
    return item > 7;
})
console.log(no); 


//+++++++++++ indexof() method
const fruits = ["mango", "apple", "banana"]
console.log(fruits.indexOf("apple")); // 1
console.log(fruits.indexOf("Apple")); // -1  // case sensitive 
// if no match found it will always return -1 


//++++++++++++ lastindexof()
console.log(fruits.lastIndexOf("apple"));


//+++++++++++++++ Map() method 

emp = [
    {
        empName : "akash", city : "pune"
    },
    {
        empName : "harshda", city : "nashik"
    },
    {
        empName : "prabhu", city : "latur"
    }
]
let names = emp.map(empData=>{
    return empData.empName;
})
console.log(names);

let nameObj = emp.map(({empName}) => ({empName}))
console.log(nameObj);

// when we have to find the indexing of any between no 

const array = [10, 20, 30, 20, 40, 50, 88, 20]
const searchElement = 20;
let foundIndex = [];

array.forEach((element, index) => {
    if(element === searchElement){
        foundIndex.push(index);
    }
})
console.log(foundIndex);


//+++++++++++++++ Includes() method true/false 
const array1 = [10, 20, 30, 20, 40, 50, 88, 20]
console.log(array1.includes(40)); //true 


//+++++++++++++ Duplicate item remove by using this method 
// This is one +++++++++++++++++++++++++++++++++++++++++++ Set() method
let char = ['a', 'b', 'a', 'a', 'c', 'd', 'e', 'f', 'b'];
let char2 = new Set(char);
console.log(char2);

// by sprade operator [...new Set()]
let char3 = [...new Set(char)]; // it comes in array formate .
console.log(char3);

//another method is use 
//+++++++++++++++++++++++ filter() whit index of method
let data = char.filter((item,i)=>{
    return char.indexOf(item) === i;
})
console.log(data);
 
