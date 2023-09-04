// Задание 1

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] === 10) break;
	console.log(numbers[i]);
}

// Задание 2

numbers.forEach((el, index) => {
   if (el === 4) console.log(`${index}`);
});

// Задание 3

let numbs = [1, 3, 5, 10, 20];

numbs = numbs.join(' ');
console.log(numbs);

// Задание 4

let masMini = [1, 1, 1];
let masBig = new Array();
 
for(i = 0; i < masMini.length; i++) {
   masBig.push([masMini[i], masMini[i], masMini[i]]);
}
console.log(masBig);


// Задание 5

let array1 = [1, 1, 1];

array1.push(2, 2, 2);
console.log(array1);

// Задание 6

let array2 = [9, 8, 7, 'a', 6, 5];

array2 = array2.sort();
let result = array2.pop();
console.log(array2);


// Задание 7

let array3 = [9, 8, 7, 6, 5];

let aske = Number(prompt('Угадайте число!'));
let verif = array3.find(el => el === aske)
   if (verif === aske) {
      alert("Вы угадали!");
   } else {
      alert('Попробуйте снова');
   };

// Задание 8

let str = 'abcdef';

let strReverse = str.split("").reverse().join("");
console.log(strReverse);

// Задание 9

let array4 = [[1, 2, 3,],[4, 5, 6]];

let arreyNew = [].concat(array4[0], array4[1]);
console.log(arreyNew);

// Задание 10

const arrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrayNew.length; i++) {
   if(i === arrayNew.length-1) {
      break;
   }
   console.log(arrayNew[i] + arrayNew[i + 1]);
}

// Задание 11

let array5 = [2, 8, 15, 4, 9, 6];

let square = array5.map(item => item ** 2);
console.log(square);

// Задание 12

let words = ['слово', '', 'слог', 'длинное предложение', 'буква']; // [5, 0, 4, 19, 5]

let lengWords = [];
for(el of words) {
   lengWords.push(el.length);
}
console.log(lengWords);

// Задание 13

function filterPositive(array6) {

   return array6.filter(item => item < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2])); 