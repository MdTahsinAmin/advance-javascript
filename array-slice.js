// array-slice 

const allValue = [10,15,14,18,98];
//  slice(start,end) => (start to end ) that is part of main array

const partOfArray = allValue.slice(1,3);
console.log("Part of main array : " +partOfArray);

console.log("Main array : " + allValue);

// remove from main array use splice(start , delete count -- (number of element you can delete));

// splice use delete and insert element 
const removeElement = allValue.splice(1,allValue.length-1,1,2,9,4);

console.log("Remove element from main array : " +removeElement);

console.log("New array : "+allValue);

// join 

const together = allValue.join(",");

console.log(together);



