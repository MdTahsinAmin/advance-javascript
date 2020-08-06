const student = [
    {id : 07  , name : 'shifar' },
    {id : 21  , name : 'Maliha' },
    {id : 53  , name : 'adnan'  },
    {id : 54  , name : 'Tahsin' }

];


collectionOFName = [];

for(let i = 0 ; i < student.length ;i++){
     let object = student[i];
    collectionOFName.push(object.name);
}

console.log(collectionOFName);

const result = student.map(s => s.name);
const ids    = student.map(s =>s.id);
const bigger = student.filter(s =>s.id >= 40);
console.log(result)
console.log(ids);

console.log(bigger);

// map filter uses