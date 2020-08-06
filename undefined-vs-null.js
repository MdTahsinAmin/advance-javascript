// if value is not assign  
let value ;

console.log(value);

// array out of bound 

let number = [10,15,16];

console.log(number[number.length +1]);

console.log(number[-1]);

// object undefine property access

let object = {name : 'Tahsin', address : "pirojpur"};

console.log(object.phone);


// function is not return a value  but your access the value 
//so it gives a undefined

function add(num1 , num2){
    console.log(num1+num2);
    // do not return  any value 
    return;
}

let result = add(10,15);

console.log(result);


// undefined is a keyword

let undefine = undefined;

console.log(undefine);

// null means not exitstance 
// using for check ;






