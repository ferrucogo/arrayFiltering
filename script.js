let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000];
let testArray2 = ["Pippo", "Pluto", "Paperino", "Topolino", "Paperone", "Paperoga"];

let filteredArray1; //Tutti i numeri che sono divisibili per 3 vanno tenuti
let filteredArray2; //Tutte le stringhe che sono più lunghe di 6 caratteri vamno tenute
let mappedArray1; //Tutti i numeri dovranno essere ridotti del 10%
let mappedArray2; //Tutte le stringhe dovranno essere MAIUSCOLE
let modifiedArray1; //Tutti i numeri vanno trasformati in positivi e andranno eliminati tutti i numeri maggiori di 100
let modifiedArray2; //Tutte le stringhe dovranno avere la prima lettera MAIUSCOLA e andranno eliminate le stringhe che non contengono la lettera R

// Esercizio 1 - Soluzione 1
function divisibleBy3(element) {
	let tempArray = []
	for (const element of testArray1) {
		if (element % 3 === 0) {
			tempArray.push(element);
		}
	}
	return tempArray;
}

//console.log(divisibleBy3(testArray1));

// Esercizio 2
function upTo6Chars(element) {
	let tempArray = [];
	for (const element of testArray2) {
		if (element.length > 6) {
			tempArray.push(element);
		}
	}
	return tempArray;
}

//console.log(upTo6Chars(testArray2));

// Esercizio 3
function reduceBy10Perc(element) {
	let tempArray = [];
	for (let element of testArray1) {
		element -= (element / 100 * 10);
		tempArray.push(element);
	}
	return tempArray;
}

//console.log(reduceBy10Perc(testArray1));

// Esercizio 4
function allToUppercase(element) {
	let tempArray = [];
	for (let element of testArray2) {
		tempArray.push(element.toUpperCase());
	}
	return tempArray;
}

//console.log(allToUppercase(testArray2));

// Esercizio 5
function positivesTill100(element) {
	let tempArray = [];
	for (let element of testArray1) {
		if (element < 0) {
			element *= (-1);
		}
		if (element >= 0 && element <= 100) {
			tempArray.push(element);
		}
	}
	return tempArray;
}

//console.log(positivesTill100(testArray1));

// Esercizio 6
function initialToUppercase() {
	let tempArray = [];
	for (const element of testArray2) {
		if (element.includes = "r" || "R") {
			tempArray.push(element[0].toUpperCase());
		}
	}
	return tempArray;
}

//console.log(initialToUppercase(testArray2));

// Esercizio bonus 1
function sumAllArray(arrayToSum) {
	let result = 0;
	for (const element of arrayToSum) {
		result += element;
	}
	return result;
}
//console.log(sumAllArray(testArray1));


// Esercizio bonus 2

function sum(first, second) {
	return first + second;
}

function product(previous, current) {
	return previous * current;
}

function sumEvenIndex(previous, current, index) {
	if (index % 2 === 0) {
		return previous + current;
	} else {
		return previous;
	}
}

function reduce(arrayToAggregate, aggregationFunction, startingElement) {
	let result, startingIndex;
	if (startingElement !== undefined) {
		result = startingElement;
		startingIndex = 0;
	} else {
		result = arrayToAggregate[0];
		startingIndex = 1;
	}

	for (let i = startingIndex; i < arrayToAggregate.length; i++) {
		const element = arrayToAggregate[i];
		result = aggregationFunction(result, element, i);
	}
	return result;
}
// console.log(reduce(testArray1, sum));
// console.log(reduce(testArray1, product));
// console.log(reduce(testArray1, sumEvenIndex));
// console.log(testArray1.reduce((previous, current, index, array) => previous + current, 0));

function removeOddAddConcatenate(previous, current, index) {
	let tempString = previous;
	if (index % 2 === 0) {
		tempString + current;
	} else {
		return previous = + " " + current;
	}
}

//Dato un array di numeri: reduce → maggiore assoluto,
//reduce → minore dei negativi, reduce → la somma dei numeri pari
let array = [12, 345, -1234, 1, 0, 23456, -2, 2, 3];

//Dato un array di stringhe: reduce → solo consonanti (con e senza),
//reduce → solo vocali (anche con ripetizioni) ((esiste una struttura dati in js simile all'array che si chiama set))
//map → cambia maiuscole in minuscole, minuscole in maiuscole
let stringArray = ["Pippo", "Paperone", "Gambadilegno", "Basettoni", "Clarabella", "Osvaldo"];


//Esercizio 1 - Soluzione 1
function absoluteHigher(previous, current) {
	if (current > previous) { //current = 12, 12 > -infinity
		previous = current;
	}
	return previous;
}
//console.log("[#1] Numero più grande in valore assoluto: " + array.reduce(absoluteHigher, -Infinity));

//Esercizio 1 - Soluzione 2
//console.log("[#2] Numero più grande in valore assoluto: " + array.reduce((previous, current) => current > previous ? current : previous));

//Esercizio 2 - Soluzione 1
function negativesSmaller(previous, current) {
	if (current < previous) {
		previous = current;
	}
	return previous;
}
//console.log("[#1] Numero più piccolo dei negativi: " + array.filter((element) => element < 0).reduce(negativesSmaller));

//Esercizio 2 - Soluzione 2
//console.log("[#2] Numero più piccolo dei negativi: " + array.reduce((previous, current) => current < previous ? current : previous));

//Esercizio 3 - Soluzione 1
function sumEven(previous, current) {
	if (current % 2 === 0) {
		return previous + current;
	} else {
		return previous;
	}
}

//console.log("[#1] La somma dei numeri pari: " + array.reduce(sumEven, 0));

//Esercizio 3 - Soluzione 2
//console.log("[#2] La somma dei numeri pari: " + array.reduce((previous, current) => current % 2 === 0 ? previous + current : previous));

//Funzione che controlla se all'interno della stringa ci sono vocali
//Versione 1
let string = ["Pippo"]

function checkIfVowels(string) {
	let vowels = ["a", "e", "i", "o", "u"];
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (char.includes(vowels)) {
			console.log("La stringa contiene vocali");
		} else {
			console.log("La stringa non contiene vocali");
		}
	}
}
//checkIfVowels(string);

//Versione 2
function checkIfVowels2(string) {
	let vowels = ["a", "e", "i", "o", "u"];
	return vowels.some((v) => string.includes(v));
}
//console.log(checkIfVowels2(string));

//Esercizio 4 - Soluzione 1
function arrayOfVowels(string) {

}

function arrayOfConsonants(string){
	let arrayFromString = [...string];
	let vowelsArray = arrayFromString.filter(checkIfVowels);
	return vowelsArray;
}
console.log(arrayOfVowels(string));

let arrayOfCons = arrayOfConsonants(string);
let setOfCons = new Set(arrayOfCons);
let stringOfCon =[...setOfCons].join("");
console.log(stringOfCon);

console.log([...new Set(arrayOfConsonants(string))].join(""));