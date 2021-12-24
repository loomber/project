"use strict";

if (4 == 5) {
	console.log("Ok!");
}else{
	console.log("Error!");
}

// Тернарный оператор ? и : делят скрипт на 3 оператора 
// Это единственный тернарный оператор 
const a = 50;
(a == 50) ? console.log('Yes') : console.log("No");

// Также есть бинарный оператор
4 + 4;

// И унарный оператор
++4;

// Кайсы здесь нужно запомнить что кейсы работают на точное сравнение не больше, меньше
// Также должен присутствовать break в каждом блоке
// Так же есть значение по умолчанию default
const num = 50;
switch(num) {
	case 49:
		console.log("Error!");
		break;
	case 100:
		console.log("Error!");
		break;
	case 51:
		console.log("True!");
		break;
	default:
		console.log("Not this time");
		break;
}
