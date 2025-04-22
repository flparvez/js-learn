let score = "pa34";

console.log(typeof score); // number
console.log(typeof (score)); // number

let StringToNumber = Number(score);
console.log(StringToNumber); // number

//  "34" => 34 
// "pa34" => NaN    
//  true => 1
//  false => 0
//  null => 0
//  undefined => NaN
//  [] => 0
//  [1,2,3] => NaN
//  [1] => 1
//  [1,2] => NaN


let isLoggedIn = 1;

let numberToboolean = Boolean(isLoggedIn);
console.log(numberToboolean); // true

// 1 => true
// 0 => false
// "hello" => true
// "" => false

let age = 23

let numToString = String(age);
console.log(typeof(numToString)); // "23"


//  ***  operations *** //


let value =3
let negV = -value
console.log(negV); 

// console.log(2+2); 
// console.log(2-2)
// console.log(2*2); 
// console.log(2/2);
// console.log(2%2); 
// console.log(2**2); 


let str = "hello"
let str2 = " parvez"
let str3 = str + str2
// console.log(str3); 


// console.log(2 + "3"); 
// console.log("2" +3+ 2);  // 232
// console.log(2 +3+ "2");  //52

// console.log( (3+2) * 5 % 3)
// console.log(+true)
console.log(+"")

let counter = 23
++counter;
// counter++;
console.log(counter); 