
// map use

 let numbers = [10,20,30,45,56];
// You can pass three parameter
 const result = numbers.map(function(element,index ,array){
     return element*element;
 })
 console.log(result);

 // filter the element using condition and return an array 
 const result1 = numbers.filter(x => !(x&1));

 console.log(result1);

 // find return first value such that when condition is true

 const value = numbers.find(x => x > 5);

 console.log(value);