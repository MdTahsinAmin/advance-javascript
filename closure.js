// closure
// kno akta function ar modde thake ono akta function call kori / return kori 
//thole je akta close environment create hoise seta bole closure
function stopWatch(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

let value = stopWatch();
console.log(value());
console.log(value());
console.log(value());
console.log(value());
console.log(value());

let value1 = stopWatch();

console.log(value1());
console.log(value1());
console.log(value1());
console.log(value1());
console.log(value1());
console.log(value());
//console.log(value1());


