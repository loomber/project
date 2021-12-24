"use strict";

let num = 50;

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// оператор break останавливает выполнения цикла
// оператор continue пропускает определённое значение не прерывая цикла
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}