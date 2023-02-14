window.addEventListener('DOMContentLoaded', () => {
	
});	

[].find(() => {

})

const array = [5, 12, 8, 130, 44];

const found = array.find(element => element > 10);
console.log(found)

const array1 = [5, 12, 8, 130, 44];

const found1 = array1.find(element => element < 5);
console.log(found1)

const array2 = [5, 12, 8, 130, 44];

const found2 = array2.filter(element => element > 10);
console.log(found2)


console.log('/////////////////////////////////////////////')

function sayHi() {
    alert('Hi');
}
sayHi()

const sayHello =  function () {
    alert('Hello');
}
sayHello()

console.log('/////////////////////////////////////////////')

const sum = (param1, param2) => {
    return param1 + param2
}
console.log(sum(1, 2))

console.log('/////////////////////////////////////////////')

const sum1 = (param1, param2) => param1 + param2;
console.log(sum(2, 3))

console.log('/////////////////////////////////////////////')

const sayHi1 = name => alert(name)
sayHi1('Simeon')

const sayHi2 = () => alert('Caloyan')

const sayHi3 = (fName, lName) => alert(`${fName} ${lName}`);
sayHi3('Simeon', 'Nikolov')

console.log('/////////////////////////////////////////////')

const user = {
    name: 'Valeria',
    lastName: 'Nikolova'
}
console.log(user.name)
console.log(user["lastName"])

// Object flags.
// write - true can be changed / false - read-only
// enumerable - true - list in loop / false - skipped in loop
// configurable - true - can delete property / false - can't do anything

// Object.getOwnPropertyDescription(obj, propertyName)

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

// Object.defineProperty(obj, propertyName, description)

console.log(Object.defineProperty(user, 'age', {
    value: 33,
}))

console.log('////////////////////KEY/////////////////////////')

for(let key in user) {
    console.log(key);
}
console.log(Object.keys(user))

console.log('//////////////////ENTRIES///////////////////////////')

for(let entries in Object.entries(user)){
    console.log(entries)
}
console.log(Object.entries(user))

console.log('//////////////////VALUE///////////////////////////')

console.log(Object.values(user))

console.log('/////////////////////////////////////////////')
for(let [key, value] in Object.entries(user)) console.log(key, value)

console.log('/////////////////////////////////////////////')




