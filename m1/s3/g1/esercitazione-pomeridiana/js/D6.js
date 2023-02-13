/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1,l2){
    let rettangolo = l1*l2
    return rettangolo
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a,b){
    let somma = a + b;
    if (a !== b){
        return somma
    }else{
       return somma * 3;
    }
}
console.log (crazySum(1,1))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a){
    let differenza = Math.abs (a - 19);
    if ( a > 19 ){
        return differenza *3
    }else{
    return differenza
}
}
console.log(crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(Math.floor(n) >= 20 && Math.floor(n) <= 100 || Math.floor(n) == 400){
        return true
    }else{
        return false
    }
}
console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
 function epify(parola){
    if ( parola.startsWith ('EPICODE')) {
        return parola;
    }else{
        return 'EPICODE ' + parola;
    }
 }
 console.log(epify('Spacca!'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(c){
    if(c >= 0 && c % 3 === 0 || c % 7 === 0){
    return true
    }else{
        return false
    }
}
console.log(check3and7(3))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string){
    return string.split('').reverse().join('')   
}
console.log(reverseString('cane'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(frase){
    return frase.split(' ').map(parola=>parola.charAt(0).toUpperCase()+parola.slice(1)).join(' ');
}
console.log(upperFirst('ciao luigi!'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa){
    return stringa.slice(1,-1)
}
console.log(cutString ('ForzaRoma'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom (n){
    let arr = [];
    for(let i = 0; i < n; i++){
        let rand = Math.floor(Math.random() * 11);
        arr.push(rand);
}
return arr
}
console.log(giveMeRandom(15))
