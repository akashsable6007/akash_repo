// String methods 
// 1) string length 
// 2) string slice()
// 3) string substring()
// 4) string substr()
// 5) string replaceAll()
// 6) string toUpperCase()
// 7) string toLowerCase()
// 8) string concat()
// 9) string trim()
// 10) string trimStart()
// 11) string trimEnd()
// 12) string padStart()
// 13) string padEnd()
// 14) string charAt()
// 16) string split()



let text = "i live in pune , i like pune";

 let textLength = text.length;
 console.log(textLength);
 // length is property not a methode 

 let slicedText = text.slice(2,6); // start index: inclusive, end index: exclusive 
 console.log(slicedText);
 console.log(text.slice(10,15));
 console.log(text.slice(-10,-5)); // start index: exclusive, end index: inclusive 

 console.log(text.substring(-5, 10)); // negative value is treated as 0 here, end index is exclusive 
 console.log(text.substr(2, 6)); // start index, length .  
 console.log(text.replace('pune', 'beed')); // replace methode only replace first match.
 console.log(text.replace('pune', 'pune')); // original string : replace is case sensitive 
// we can make it case insensitive by uaing regx /word/

console.log(text.replace(/Pune/i, 'pune'));
console.log(text.replace(/Pune/ig, 'pune')); // insensitive / globally replace 
console.log(text.replaceAll('pune', 'nashiik')); // case sensitive   

console.log(text.replace('i live in pune , i like pune', 'akash')); // case sensivitive 
console.log(text.replace(/i live in pune , i like pune/i, 'akash')); // case insensivitive 


console.log(text.toUpperCase());
console.log(text.toLowerCase());

// ******** string concat() methode
let firstName = 'akash';
let lastName = 'sable' ;
// let fullName = firstName + " " +  lastName 
let fullName = firstName.concat(' ', lastName, ' ', 6007)
console.log(fullName);

// ****** trim method 
 // this trim methode will removes whitespaces from the both sides of a strings
 let data = '       akash     ';
 console.log(data.trim());
 

 // removing whitespaces by the methods ** (extra points we study )
 
 var string = "   This    should becomes something         else too . "
 stringData = string.trim().replace(/\s+/g," ");
 console.log(stringData);


 // covert number datatypes to string by tostring  
 let no = 6007
 let data1 = no.toString();
 console.log(data1);

 // convert string to no 
 let num2 = "6007";
 let m = parseInt(num2);
 console.log(m);

 // charAt string method 
 let text1 = "HELLO WORLD"
 let char = text1.charAt(2);
 console.log(char);


 // split method 
 let date = "19-10-2001";
 let newDate = date.split('-'); //it splits out date and will return array.
 console.log(newDate);
 console.log(newDate.toString());
 console.log(newDate[2]);

 // include string method 
let add = "akash rahul ramesh raghav";
console.log(add.includes("akash"));  // include methods return true if value is include in data else will return false .

 // startwth and endwith method 
 let statuscode = "100256";
 let a = statuscode.startsWith("100");
 console.log(a);
 console.log(statuscode.endsWith("56"));


 // index of methode  
 let text5 = "Hello I am Akash Sable";
 let result = text5.indexOf("am");
 console.log(result);
 // if words are repeted that time it should return first match of index 
 console.log(text5.indexOf("ammmmm")); // return is always -1 .

 // search of property 

let text6 = "Mr. Blue has a blue house";
// let position = text6.search("blue");
let position = text6.search(/blue/i); // we can add regex pattern 
console.log(position); // difference between search and index of methode :>> we cannot pass regex pattern to indexof .

// The search() cannot take start position argument .
// The index of() method cannot search against a regular expression.
// The search() method returns the position of first match.
// the match() method returns an array of matches.