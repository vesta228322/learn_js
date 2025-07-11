'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
}
console.log(personalMovieDB);


// Условия
if (1) {
	console.log('Ok!');
} else {
	console.log('error');
}

// Вложенность условий

const num = '50';

if (num < 49) {
	console.log('error');
} else if (num > 100) {
	console.log('Много');
} else {
	console.log('Ok!');
}

(num == 50) ? console.log('Ok!') : console.log('error'); // Тернарный оператор (?) - это условный оператор, который сокращенно записывает конструкцию if-else. Он использует три операнда: условие, выражение, которое выполняется, если условие истинно, и выражение, которое выполняется, если условие ложно. В большинстве языков программирования он записывается в виде условие ? выражение_если_истина : выражение_если_ложь. 

// Оператор switch в JavaScript - это конструкция выбора, которая позволяет выполнить различные блоки кода в зависимости от значения выражения. Он сравнивает значение выражения с несколькими значениями (case), и если находит совпадение, выполняет соответствующий блок кода. Если ни один из case не совпадает, может быть выполнен блок default, который является необязательным. switch часто используется для упрощения кода, когда требуется проверить переменную на несколько возможных значений, заменяя собой несколько вложенных операторов if. 


switch (num) {   // Конструкция свитч всегда идёт только на строгое сравнение в отличии от обычных условий
	case '49':
		console.log('Неверно');
		break;
	case '100':
		console.log('Неверно');
		break;
	case '50':
		console.log('Красава!');
		break;
	default:
		console.log('GGWP');
}

// Дополнительно. Логические операторы

// Ситуация.. "Я голоден и хочу купить картошку фри и гамбургер. Если оба блюда есть в наличии то я выполню свою задачу, я наемся))" пример кода

const hamburger = 5; // В наличии есть гамбургер
const fries = 0; // Тоже самое и для картохи фри

// Дальше условие
if (hamburger && fries) {
	console.log('Я накушался');
}

// console.log((hamburger && fries)); // Результат логических операций - это какое-то логическое булевое значение

// const hamburger = 3; 
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries); // Когда операторы работают именно с данными (не true или false), они будут возвращать значения, с которыми они работают. Оператор И (&&) возвращает первое ложное значение, в противном случае, если всё истинно, то вернёт последний

// Ещё несколько примеров

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'qwerty');

// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('Все накушались');
// } else {
// 	console.log('Мы уходим');
// }


// const hamburger = 3; 
// const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
	console.log('Все довльны');
} else {
	console.log('Мы уходим');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samreport, mariaReport = 'done';

console.log(johnReport || alexReport || samreport || mariaReport);

for (let i = 1; i <= 3; i++) {
	console.log(i);
	for (let j = 1; j <= 3; j++) {
		console.log(j);
	}
}

// *
// **
// ***
// ****
// *****
// ******


// let star = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
// 	for (let j = 0; j < i; j++) {
// 		star += '*';
// 	}
// 	star += '\n';
// }
// console.log(star);

for (let i = 1; i < 7; i++) {
	let star = '';
	for (let j = 0; j < i; j++) {
		star += '*';
	}
	console.log(star);
}
let nUM = 30; 

function showFirstMessage(text) {
	console.log(text);
	let nUM = 20;
	console.log(nUM);
}

showFirstMessage('Hello World!');
console.log(nUM);

function calc(a, b) {
	return(a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
	console.log('Hello');
};

logger();

function convert(amount) {
	console.log(2.96 * amount);
}

convert(150);
// Типа универсальная функция

const usdCurr = 2.96;
const eurCurr = 3.458;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}

const res = convert(150, usdCurr) // Чаще всего можно видеть такое в коде.. (промежуточная переменная)
promotion(res);

function test() {
	for (i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return
	}
	console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);

const str = 'test';
const arr = [1, 2, 3];

console.log(arr.length);