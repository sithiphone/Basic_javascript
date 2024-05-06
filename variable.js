/*
//Number type
//let age = 18;
console.log(age); // 18
let blue = 0x0000ff;
console.log(blue); // 255
let pi = 3.14159;
console.log(pi); // 3.14159

//String type
let firstName = 'Sithiphone';
let lastName = "PHANDALA";
console.log(firstName + " " + lastName); // John Doe

//Boolean type
let isReading = true;
let isSleeping = false;
console.log(isReading); // true
console.log(isSleeping); // false

//Null type
let car = null;
console.log(car); // null

//Undefined type
let x;
console.log(x); // undefined

//Symbol type
let sym1 = Symbol('foo');
console.log(sym1); // Symbol(foo)

//Object type
let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
console.log(myCar.make); // Ford

//use case sample of \n
console.log("Hello\nWorld");

//use case sample of \r
console.log("Hello\rWorld");

//use case sample of \t
console.log("Hello\tWorld");

//use case sample of \' and \"
console.log('I\'m Sithiphone');
console.log("I'm Sithiphone");
//console.log('I'm Sithiphone'); // Error

//use case of \\
console.log('C:\\Program Files\\MyProgram');


//use case of ${}
let name = 'Sithiphone';
let age = 18;
console.log(`Hello, my name is ${name} and I'm ${age} years old.`);


// use case of object
var obj = {
    name: 'Sithiphone',
    age: 18,
    isMarried: true
};

console.log(`Hello, my name is ${obj.name} and 
I'm ${obj.age} years old. 
I'm ${obj.isMarried ? 'married' : 'not married'}.`);

// function
function sayHello(name) {
    return `Hello, ${name}`;
}

console.log(sayHello('Sithiphone'));

// function use case of => 
let sayHello2 = (name) => `Hello, ${name}`;
console.log(sayHello2('Sithiphone'));


// use case of object destructuring
let obj = {
    name: 'Sithiphone',
    age: 18,
    isMarried: true
};

let { name, age, isMarried } = obj;
console.log(`Hello, my name is ${name} and
I'm ${age} years old.
I'm ${isMarried ? 'married' : 'not married'}.`);

// use case of array destructuring
let arr = ['Sithiphone', 18, true];
let [name2, age2, isMarried2] = arr;
console.log(`Hello, my name is ${name2} and
I'm ${age2} years old.
I'm ${isMarried2 ? 'married' : 'not married'}.`);


//sample of spead operator
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr3 = [...arr1, ...arr2];

console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//sample of spread operator in case of object

let obj1 = {name: 'Jonh', age: 30}
let obj2 = {width: 55, height: 160}

let obj3 = {...obj1, ...obj2}

console.log(obj3);



//Rest parameter

function getMyName(...args){
    return args.join(' ');
}

console.log(getMyName('Jonh', 'Doe'));
console.log(getMyName(18));



//sample of default parameter

function getNum(a = 1, b = 2, c){
    console.log(a, b, c);
}

getNum();
getNum(4);
getNum(4, 5);
getNum(4, 5, 6);


let arr = [1,2,3,4,5];
let mix = [1, 'a', 'b', ];
let obj = [{name: 'Jonh'},{name : 'Jane'}];
let arr2 = [arr, arr];


console.log(arr);
console.log(mix);
console.log(obj);   
console.log(arr2);
console.log(mix[1]);


// sample of loop for

for (let i = 0; i < 5; i++) {
    console.log(i);
}


//sample of foreach
let arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(value, index);
});



//sample of for of
let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
    console.log(value);
}


//sample of for in
let obj = {
    name: 'Sithiphone',
    age: 18,
    isMarried: true
};

for (let key in obj) {
    console.log(key, obj[key]);
}


// array function push and pop
let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]



// sample of array function shift and unshift
let arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]



// sample of array function concat
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sample of array function slice
let arr4 = [1, 2, 3, 4, 5];
let arr5 = arr4.slice(1, 3);
console.log(arr5); // [2, 3]


//sample of array function splice
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 2);
console.log(arr6); // [1, 4, 5]



//sample of array function copyWithin
let arr7 = [1, 2, 3, 4, 5];
arr7.copyWithin(0, 3);
console.log(arr7); // [4, 5, 3, 4, 5]


//sample of array function fill
let arr8 = [1, 2, 3, 4, 5];
arr8.fill(0, 1, 3);
console.log(arr8); // [1, 0, 0, 4, 5]


//sample of array function reverse
let arr9 = [1, 2, 3, 4, 5];
arr9.reverse();
console.log(arr9); // [5, 4, 3, 2, 1]

*/
//sample of array function sort
let arr10 = [5, 4, 3, 2, 1];
arr10.sort();
console.log(arr10); // [1, 2, 3, 4, 5]