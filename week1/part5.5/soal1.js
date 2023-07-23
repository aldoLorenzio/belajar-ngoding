//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!


let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';


//code here


console.log(word +" "+ second +" "+ third+" "+fourth+ " "+fifth+" "+ sixth +" "+seventh);

// ---------------------------------------
console.log(' ');
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let kata = 'wow JavaScript is so cool';
let exampleFirstWord = kata[0] + kata[1] + kata[2];
let exampleSecondWord = kata[4] + kata[5] + kata[6] + kata[7] + kata[8] + kata[9] + kata[10] + kata[11] + kata[12] + kata[13]
let exampleThirdWord = kata[15] + kata[16]
let exampleFourthWord = kata[18] + kata[19]
let exampleFifthWord = kata[21] + kata[22] + kata[23] + kata[24] 

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + exampleSecondWord);
console.log('Third word: ' + exampleThirdWord);
console.log('Fourth word: ' + exampleFourthWord)
console.log('Fifth word: ' + exampleFifthWord)

// ---------------------------------------
console.log(' ');
// ---------------------------------------


// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let exampleSecondWord3 = word3.substring(4, 14);
let exampleThirdWord3 = word3.substring(15, 17);
let exampleFourthWord3 = word3.substring(18, 20);
let exampleFifthWord3 = word3.substring(21, 25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + exampleSecondWord3);
console.log('Third word: ' + exampleThirdWord3);
console.log('Fourth word: ' + exampleFourthWord3)
console.log('Fifth word: ' + exampleFifthWord3)

// ---------------------------------------
console.log(' ');
// ---------------------------------------


// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let exampleSecondWord4 = word4.substring(4, 14);
let exampleThirdWord4 = word4.substring(15, 17);
let exampleFourthWord4 = word4.substring(18, 20);
let exampleFifthWord4 = word4.substring(21, 25);

let firstWordLength = exampleFirstWord4.length;
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength)
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength)
console.log('Third Word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength)
console.log('Fourth Word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength)
console.log('Fiftht Word: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength)