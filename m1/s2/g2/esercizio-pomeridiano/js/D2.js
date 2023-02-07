/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quando ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In Javascript esistono 3 differenti data types:

- strings: le stringhe sono parti di testo comprese tra apici singoli o doppi, che possono comprendere una parola, come intere frasi, ma anche numeri.

- numbers: includono esclusivamente valori numerici che possono essere sia interi (integers) che decimali (floats). A differenza delle stringhe i numeri non hanno bisogno di essere racchiusi tra apici. Il decimale è rappresentato da un punto.

- booleans: un dato booleano comprende solo due possibili valori che sono "true" e "false". Qualsiasi dato può essere convertito in valore booleano all'interno di apposite funzioni. */

let parola = 'ciao'; // string
console.log(parola);

let numero = 1; // number
console.log(numero);

let condizione = true;
console.log(condizione);


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name = 'Vittorio'; */ //esempio 1

const name = 'Vittorio';

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un'addizione (una somma) dei numeri 12 e 20.
*/
let somma = 12+20; //esempio 1
console.log(somma);

let a = 12; //esempio 2
let b = 20;
console.log(a+b);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* let name = 'Vescio';
console.log(name); - dimostrazione: Uncaught SyntaxError: Identifier 'name' has already been declared (at D2.js:61:5) */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = (4 - x); /* esempio 1 */
console.log(sottrazione);

let c = 4; // esempio 2
console.log(c-x);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);

console.log(name1 === name2.toLowerCase());
