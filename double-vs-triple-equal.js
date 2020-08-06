// Double equal ( == ) two value are equal but not the same data types

// first  = 2 and second = '2' those are same/equal when you use (==)

// first = 0 and second  = false/'0' those are same / equal when you use (==)

// first = 1 and second = true/'1' those are same / equal when you use (==)

// Data type is not matter
// type conversion (==)

let firstValue = 2;

let secondValue = '2';

if(firstValue == secondValue){
    console.log('Both are equal');
}
else console.log('Both are not equal');


// triple equal (===) two values are equal and same data type
// third = '4' and four ='4' those are equal and same data type when use (===)
// third = false and four = false those are equal when use (===)
// third = true and four = '1'/1 those are not equal because both are not same data type when use(===)
// third = 1 and four  = 1 those are equal  when use (===)

// data type plays  a  vital role 


let third = 4;

let four = '4';

if(third === four){
    console.log('both are equal');
}
else console.log('both are not equal');