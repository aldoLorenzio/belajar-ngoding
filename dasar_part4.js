let nilai = 80 ;

// console.log(nilai >= 50) // tergantung nilainya, jika terpenuhi akan true.. sebaliknya akan false

if (nilai >= 80 && nilai <=100 ) {
    nilai = "A";
} else if (nilai >= 70 && nilai < 80) {
    nilai = "B";
} else if (nilai >=60 && nilai < 70) {
    nilai = "C";
} else {
    nilai = "Ga ada dalam kondisi coy"
}

console.log(nilai)

nilai = 60;

// untuk operator && , semua kondisi harus terpenuhi.. maka dia akan menghasilkan true
// untuk operator // , jika salah satu kondisi terpenuhi... maka dia akan menghasilkan true

let banding = nilai >= 80 && nilai <= 100 //antara true or false
console.log(banding, "&&")
let banding2 = nilai >= 80 || nilai < 100 //antara true or false
console.log(banding2, "||")
let banding3 = nilai != 50
console.log(banding3, "!=")

//apa bedanya == dengan ===
let x = 50; //tipe data number
let y = "50" //tipe data string

let banding4 = x == y;
console.log(banding4,'4')
let banding5 = x === y;
console.log(banding5, '5')

//if else ini bisa kita bikin bersarang juga
let number = 6;
if (number > 5) {
    if(number % 2 === 0) {
        console.log("lebih besar dari 5 dan genap")
    } else {
        console.log("lebih besar dari 5 dan ganjil")
    }
} else {
    if (number % 2 === 0) {
        console.log("lebih kecil atau sama dengan dari 5 dan genap")
    } else{
        console.log("lebih kecil atau sama dengan dari 5 dan ganjil")
    }
}