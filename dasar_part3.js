// Cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// Variabel bisa menampung tipe data string, integer, bollean, array, object.

let nama = 'Dodo'; //string
let umur = 22; //number
let isTrue = true //boolean
let uang = 5000.5 //Number

// Operator Aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, 'Pertambahan'); // 30
console.log(angka1 - angka2, 'Pengurangan'); //-10
console.log(angka1 / angka2, 'Pembagian'); //0.5
console.log(angka1 * angka2, 'Perkalian'); // 200
console.log(angka1 % angka2, 'Modulus'); //10

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);//0.5

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //200

//String juga bisa ditambah namun string ga bisa dikurangi dengan operator Aritmatika
let firstname ='Aldo';
let lastname = 'Lorenzio';
let fullname= firstname + ' ' + lastname;
console.log(fullname);
console.log(firstname + lastname)
console.log(firstname - lastname) //NaN

//alur pembacaan code itu dimulai dari kiri ke kanan, dan atas ke bawah
//contoh

let number = 20;
console.log(number + 10)
number = 10;
console.log(number + 10);
number = false;
console.log(number + true)

//Lah kok bisa false + true = 1? karna dalam dunia pemrograman false = 0 dan true = 1

//Membaca error
//ga usah takut dengan error, justru harus takut klo tidak ada error dalam dunia pemrograman
// karena dalam pekerjaan itu kalau ada suatu fitur bisa berjalan namun tidak ada error, itu bikin si progerammer muak buat cari kesalahannya 

// contoh error
// const hewan ='jerapah';
// console.log(hewan);
// hewan = Jerapah;

// Shortcut untuk komentar = ctrl + / 

// Tips untuk programming adalah teliti, dan kalau ada error baca aja, dan belajar programming itu butuh kebiasaan.
// Because coding is build from habit ;)
