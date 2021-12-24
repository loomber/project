"use sctrict";

// Data Types section -------------------------
/* 
---Simple types
Numbers 1,2, 1.3
Strings 'string' or "striing" or `string` your chose or project style
Logic type (boolean) true/false
null You don't have link on 
undefined
Symbol
BigInt

---Object types
Arrays (arrays is a part of object)
Functions
Data objects
Regular expressions
Errors
*/


// Numbers section -------------------------

let number = 4;

// Retutn infinity
console.log(4/0);

// Return -Infinity
console.log(-4/0);

//Return Nan (Not a number)
console.log('Don' * 5);

// String section -------------------------

const persone = 'Dom';

// Return Dom
console.log(persone);

// Return error ReferenceError (no link on object something)
console.log(something);

const some;

// Return error undefined (odject is empty)
console.log(some);

// Objects section -------------------------

const mas = {
	name: "Dom",
	age: 35,
	isMarried: false
};

//Return name (Dom)
console.log(mas.name);
console.log(mas["name"]); // Old version

