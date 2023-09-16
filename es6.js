/*
ES6 (ECMAScript 2015)

ES6 adalah versi dari bahasa pemrograman JavaScript yang menghadirkan banyak fitur baru dan peningkatan sintaksis. Salah satu peningkatan utama dalam ES6 adalah diperkenalkannya arrow function yang sangat bermanfaat dalam memanipulasi array

Berikut adalah beberapa fitur ES6 dan contoh penggunaan array function:

1. ARROW FUNCTION

Arrow Function adalah cara singkat untuk mendefinisikan fungsi dalam JavaScript. Mereka memiliki sintaks yang lebih pendek dan lebih mudah dibaca daripada fungsi biasa.

*/

//Contoh Fungsi Biasa
function multiply(a,b) {
    return a * b
}

//Contoh Arrow function
const multiplyA = (a,b) => a * b

/*
2. LET and CONST
let dan const adalah pengganti var dalam ES6. let digunakan untuk mendeklarasikan variabel yang nilainya dapat diubah, sedangkan const digunakan untuk variabel yang nilainya tidak bisa diubah setelah dideklarasikan
*/

//CONTOH
let x = 5;
x = 10; // Nilai x bisa diubah

const y = 20
//y = 20 // akan menyebabkan error, karena y nilainya tidak bisa diubah


/*
3. TEMPLATE LITERALS

Template Literals memungkinkan anda menyisipkan variabel atau ekspresi dalam string dengan menggunakan tanda backtick (`). Ini membuat penggabungan string dan variabel lebih mudah dibaca.

*/

//Contoh
const name = 'John'
const age = 25;

const message = `Nama saya ${name} dan saya berusia ${age} tahun`

/*
4. SPREAD OPERATOR dan REST PARAMETER

Spread operator (...) dapat digunakan untuk menguraikan elemen array atau objek menjadi beberapa elemen terpisah. Rest parameter juga menggunakan sintaks yang serupa untuk mengumpulkan beberapa argumen menjadi sebuah array
*/

//Contoh:

// const numbers = [1, 2, 3];
// const newArray = [...numbers,4 , 5] // Menambahkan elemen pada array

// function sum (...args) {
//     return args.reduce((total, num) => total + num, 0)
// } 

// console.log(sum(1,2,3)) // 6

/*
5 ARRAY METHOD (ARRAY FUNCTION)

Beberapa method baru diperkenalkan dalam ES6 untuk memanipulasi array dengan lebih efisien.
*/

//Contoh:

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2) // [2,4,6,8,10]

const evenNumbers = numbers.filter(num => num % 2 == 0) // [2, 4]

const sum = numbers.reduce((total, num) => total + num,0) // 15

//Masih banyak fitur fitur ES6 beserta functionnya selain diatas. Mulai lah cari sendiri untuk membentuk habit explore (Phase 1 habbit)

/*
6. THE FOR/ OF LOOP

Statemenet for/of JavaScript loop melalui value yang iterable objects (Object yg bisa dirubah)

for/of membolehkan kamu untuk looping melewati struktur data yang bisa dirubah seperti Arrays, Strings, Maps, NodeList, dan yg lainnya

Syntax for/of loop mempunyai syntax sebagai berikut:

for(variable of iterable){
    // code block yang akan dieksekusi
}

variabel - untuk setiap perulangan.. value dari next property di assign kepada variabel. Variabel bisa di deklarasikan dengan const, let atau var

(iterable) - Sebuah object yg properties nya bisa dirubah
*/

//Contoh for loop biasa di Array;
let cars = ["BMW", "Volvo", "Mini"]
let text = ""
// for (let i = 0; i <= cars.length-1; i++){
//     text += cars[i] + " "
// }
//Contoh for/of loop di Array
for(let i of cars){
    text += i + " "
}

console.log(text)

//Contoh for loop biasa di String;


//Contoh for/of loop di String;
let languange = "JavaScript";
let hasil = '';

for(let x of languange){
    hasil += x 
}
console.log(hasil)

//JavaScript Maps
//Being able to use an Object as a key is an imprtant Map feature.

const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
])


//Create a set
const letters = new Set();

//Add some values to the Set
letters.add("a")
letters.add("b")
letters.add("c")

// string.includes()
//The includes() method returns true if a string contains a specified value, otherwise false
let texts = "Hello world, welcome to the universe";
texts.includes("world") // returns true
