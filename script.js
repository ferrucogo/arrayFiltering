let testArray1 = [12, 57, 1001, -67, -12, 5, 27, 48, -6000];
let testArray2 = ["Pippo", "Pluto", "Paperino", "Topolino", "Paperone", "Paperoga"];

let filteredArray1; //Tutti i numeri che sono divisibili per 3 vanno tenuti
let filteredArray2; //Tutte le stringhe che sono più lunghe di 6 caratteri vamno tenute
let mappedArray1; //Tutti i numeri dovranno essere ridotti del 10%
let mappedArray2; //Tutte le stringhe dovranno essere MAIUSCOLE
let modifiedArray1; //Tutti i numeri vanno trasformati in positivi e andranno eliminati tutti i numeri maggiori di 100
let modifiedArray2; //Tutte le stringhe dovranno avere la prima lettera MAIUSCOLA e andranno eliminate le stringhe che non contengono la lettera R

// Esercizio 1 - Soluzione 1
function divisibleBy3(element){
let tempArray = []

for (const element of testArray1){
    if (element % 3 === 0){
        tempArray.push(element);
        }
    }
    return tempArray;
}

console.log(divisibleBy3(testArray1));

// Esercizio 2
function upTo6Chars(element){
let tempArray = [];
    for (const element of testArray2){
        if (element.length > 6){
            tempArray.push(element);
        }
    }
    return tempArray;
}

console.log(upTo6Chars(testArray2));

// Esercizio 3
function reduceBy10Perc(element){
let tempArray = [];
    for (let element of testArray1){
        element -= (element / 100 * 10);
        tempArray.push(element);
    }
    return tempArray;
}

console.log(reduceBy10Perc(testArray1));

// Esercizio 4
function allToUppercase(element){
let tempArray = [];
    for (let element of testArray2){
        tempArray.push(element.toUpperCase());
    }
    return tempArray;
}

console.log(allToUppercase(testArray2));

// Esercizio 5
function positivesTill100(element){
let tempArray = [];
    for (let element of testArray1){
        if (element < 0){
            element *= (-1); 
        }
        if (element >= 0 && element <= 100){
            tempArray.push(element);
        }
    }
    return tempArray;
}

console.log(positivesTill100(testArray1));

// Esercizio 6
function initialToUppercase(){
let tempArray = [];
    for (const element of testArray2){
        if(element.includes = "r" || "R"){
            tempArray.push(element[0].toUpperCase());
        }
    }
    return tempArray;
}

console.log(initialToUppercase(testArray2));