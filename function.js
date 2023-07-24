function helloWorld(){
    return 'Hello World'
} //fungsi ini punya nilai 'Hello World'

console.log(helloWorld)

function test(){
    console.log('test')
} //tidak memiliki nilai.. bisa memakai test() tapi tidak bisa menggunakan console.log(test()) atau dia akan menghasilkan undefined

test()

let hello = helloWorld();
let hell1 = 'Hello World';

function tambahAngka(angka1, angka2){ // parameter disini banyak banget, sesuai kebutuhan
    return angka1 + angka2;
}

console.log(tambahAngka(1,2))
console.log(tambahAngka(2,4))
console.log(tambahAngka(3,6))
console.log(tambahAngka(4,8))
console.log(tambahAngka())


//andai ada function yg seperti ini

function ntahApaan(a,b,c,d){
    //bebas lah isi apaan
}

ntahApaan(1,2,3,4,5)
//parameter fungsi ada 4 hingga huruf d, tapi pemanggilan functionnya hingga 5 angka
//angka 5 ga akan dianggap

/*
Poin penting dalam belajar function
*teliti dalam penentuan parameter mau tipe data apa aja
*jangan lupa kasih() buat jalanin fungsinya
*penamaan fungsi harus jelas
*penamaan parameter harus jelas
*/

//Scope pada pemrograman
let nama = "andi"; //variabel ini ada pada global scope yg mana bisa diakses pada fungsi fungsi yang sejajar

function hello() {
    let hello = "hello"; //variabel ini ada di local scope
    //local scope fungsi hello, yang mana akan error kalau variabel hello kita panggil keluar dari fungsinya

    console.log(hello + nama1);
}

console.log(hello) //ini akan error

//simpelnya penulis menyebutkan adanya hierarki pada pemrograman
//misal

let nilai = 50

if (nilai > 50) {
    let hasil = "Lulus" // disini bisa deklarasi variabel hasil
} else {
    let hasil = "Tidak lulus" //disini juga bisa deklarasi variabel hasil karena terdapat didalam satu local if else
}

console.log(hasil) //namun bila dijalankan ya akan error, karena variabel hanya bisa diakses pada local scope if else tsb

//dan pada if else, dan looping itu akan menghasilkan block scope

//global scope
if(kondisi) {
    //block scope nya si if
} else {
    //block scopenya si else
}

//ini masih global scope

function ntahApa() {
    //local scopenya si fungsi ntahApa
    if(kondisi) {
        //ini makin dalam, yang dinamakan block scope
        //let hello = "woi lul"
    }
    console.log(hello) //error nantinya soalnya ga scope
}

//lalu gimana kalo emang pengen manipulasi variabel dalam conditional statement???
//berikut solusinya

let woi = "woi"
function ntahApa() {
    //local scopenya si fungsi ntahApa
    let hello = "";
    if(kondisi) {
        //ini block scope
        hello = "woi wkwkwk"
        console.log(hello) // ini ga akan error, ya karena var hello ada diluar scopenya
        let akanError = "ehehehe"
    }
    console.log(akanError) // ini akan error, mungkin tidak akan error jika dalam satu block ini var akanError di assign ulang 
    
    console.log(hello) //ini ga error, soalnya log ini dan var hello berada dalam scope yang sama
    console.log(woi) //ini juga a error, karena memanggil var woi yang berada di luar/atas/global scope
}



