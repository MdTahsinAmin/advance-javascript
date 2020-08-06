// Conditional 

// integer value

// without zero for every number is true in if condition when you don't use comp operator
// according to binary value condition true  0 , 1 => zero means false and one means true 
// array use [] it gives true
let arr = []; // if condition gives true value

let value1 = 2 ;
let value = true; // using boolean value only false give us false;

if(value){
  console.log('Condition is true');
}
else{
    console.log('Condition is false');
}

// string 

// if the string not empty if condition is satisfy
// true value  = " ","tahsin"
let string1 = "Tahsin";

let string = ""; // is  a empty string so if condition isn't satisfy 

if(string){
    console.log(string);
}
else console.log("Condition isn't valid");



// Undefined, NaN , null
// undefined , NaN,null don't satisfy the if condition 

let firstValue = null;

if(firstValue){
    console.log('is it undefined');
}
else console.log("is undefined");



// anything handle using and(&&) , or(||) , not (!) ,notequal(!=) 
// greater than  (>) or  less than (<)