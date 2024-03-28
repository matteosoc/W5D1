/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
const num1 = parseInt(prompt("inserisci un numero"))
const num2 = parseInt(prompt("inserisci un altro numero"))

function crazySum(a,b) {
 if (a === b) {
   return (a + b) * 3         
 } else {
   return a + b
 }
}

console.log(crazySum(num1,num2))
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* 
function boundary(p) {
    if ( ((p >= 20) && (p <= 100)) || (p === 400) ) {
        return true
    } else {
        return false
    }
}

console.log(boundary(150))
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function reverseString(str) {
    const splitString = str.split("")
    const reverseArray = splitString.reverse()
    const joinArray = reverseArray.join("")
    return joinArray
}

console.log(reverseString("veloce"))
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst (str) {
    const splitString = str.split(" ")
     let finalArray = []
    
    for (let i=0; i < splitString.length; i++) {
    const splitWord = splitString[i].split("")
    const firstLetter = splitWord [0]
    firstLetterUpper = firstLetter.toUpperCase()
    const result = splitString[i].replace(firstLetter,firstLetterUpper)
    finalArray.push(result) 
    }
  
    let phrase = finalArray.toString()
    return phrase.replaceAll(","," ")
}

console.log(upperFirst("inserisci la frase qui"))
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
function giveMeRandom(n) {
    let numbersArray = []
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor((Math.random() * 10) + 1);
        numbersArray.push(randomNumber)
    }
    
    return numbersArray
}


console.log(giveMeRandom(25))
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* 
function area (l1,l2) {
    return l1 * l2
}

console.log(area(3,7))
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*
function crazyDiff(n) {
    let a = Math.abs(n)
    let risult 
    if ((a - 19) > 19) {
        return (a - 19) * 3
    } else {
        return a - 19
    }
}


console.log(crazyDiff())
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
function codify(str) {
    let x = "code"
    if (str.includes(x)) {
        return str
    } else {
        str = `${x} ${str}`
        return str
    }
}


console.log(codify("dovrebbe funzionare così"))
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
const x = parseInt(Math.abs(-7))

function check3and7(n) {
    if ((n % 3 === 0) || (n % 7 === 0)) {
        return true
    } else {
        return false
    }

}

console.log(check3and7(x))
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*


*/
