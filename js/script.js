'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов?'),
	b = prompt('На сколько оцените его?'),
	c = prompt('Какой ещё фильм вам понравился?'),
	d = prompt('И на сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// Условия
if (0) {
	console.log('Ok!');
} else {
	console.log('error');
}

// Вложенность условий


if (num < 49) {
	console.log('error');
} else if (num > 100) {
	console.log('Много');
} else {
	console.log('Ok!');
}

(num == 50) ? console.log('Ok!') : console.log('error'); // Тернарный оператор (?) - это условный оператор, который сокращенно записывает конструкцию if-else. Он использует три операнда: условие, выражение, которое выполняется, если условие истинно, и выражение, которое выполняется, если условие ложно. В большинстве языков программирования он записывается в виде условие ? выражение_если_истина : выражение_если_ложь. 

// Оператор switch в JavaScript - это конструкция выбора, которая позволяет выполнить различные блоки кода в зависимости от значения выражения. Он сравнивает значение выражения с несколькими значениями (case), и если находит совпадение, выполняет соответствующий блок кода. Если ни один из case не совпадает, может быть выполнен блок default, который является необязательным. switch часто используется для упрощения кода, когда требуется проверить переменную на несколько возможных значений, заменяя собой несколько вложенных операторов if. 

const num = '50';

switch (num) {   // Конструкция свитч всегда идёт на строгое сравнение в отличии от обычных условий
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

// const hamburger = 5; // В наличии есть гамбургер
// const fries = 0; // Тоже самое и для картохи фри

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


const hamburger = 3; 
const fries = 3;
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