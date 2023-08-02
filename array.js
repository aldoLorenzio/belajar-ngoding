//APA ITU ARRAY???
//Simplenya Array adalah kumpulan dari berbagai data, Array itu seperti List. Kalian bisa menampung banyak data pada satu variable Array

//contoh
let animals = ["lion", "cat","tiger","fish"]

//tipe data apapun bisa masuk dalam satu array
//akan tetapi lebih bagus kalau diisi hanya satu tipe data, dan satu tujuan.
//Cara mengakses salah satu elemen array itu cukup dengan indexing

//misal

let array = [1,2,3];
console.log(array[0]) //outputnya akan menghasilkan angka 1

//Setelah itu terdapat yang namanya method method pada array untuk memanipulasi Array
//
// MACAM-MACAM ARRAY METHOD
/*
*length
*push()
*pop()
*shift()
*unshift()
*splice()
*slice()
*/

//ada method method yg lain tapi akan dipelajari lain kali aja karena terlalu advance seperti method filter, map, reduce

//method length akan me-return nilai total elemen/item yang ada pada array

let hewan = ["Gajah", "Jerapah"]
console.log(hewan.length) //2

let angka = [3,2,1,4,5,6,7]
console.log(angka.length) //7

//method push() berfungsi untuk memasukan data pada urutan terakhir array atau bisa dibilang memasukkan data ke paling kanan

let hewanP= ["Marmut", "Kucing"];
hewanP.push("Tikus");
console.log(hewanP); //["Marmut", "Kucing","Tikus"]

//method pop() berfungsi untuk menghapus elemen terakhir pada array bisa dibilang ngehapus elemen array paling kanan

let hewanPop = ["Marmut", "Kucing", "Tikus"]
hewanPop.pop();
console.log(hewanPop); //["Marmut", "Kucing"]

//method shift() berfungsi untuk menghapus elemen pertama pada array, bisa dibilang ngehapus yang paling kiri

let hewanSh = ["Marmut", "Kucing", "Tikus"]
hewanSh.shift();
console.log(hewanSh) //["Kucing","Tikus"]

//method unshift() berfungsi untuk menambahkan data pada urutan pertama, bisa dibilang nambahin sesuatu dipaling kiri

let hewanUn = ["marmut", "kucing"];
hewanUn.unshift("tikus")
console.log(hewanUn) //["tikus","marmut","Kucing"]

//method splice berfungsi bisa menambahkan data, bisa menghapus data pada array, bisa dua duanya sekaligus tergantung isi parameter yang digunakan pada splice


//////////////////////////////////////
//contoh.splice(0,1,"gajah","macam")
//////////////////////////////////////


//simpelnya .splice(param1,param2,...param-sisanya) //berarti parameternya bisa ada banyak data
//parameter pertama sebagai penentuan posisi mau diindex ke berapa
//parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau dikasi nilai 0)
//parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak

//contoh menghapus 1 item dari index nomor 1
let hewanSp = ["marmut", "kucing", "tikus"];
hewanSp.splice(1,1)
console.log(hewanSp); //["marmut","tikus"]

//contoh menambahkan 1 item tanpa menghapus apa apa, dari index nomor 1
let hewanSp1= ["Marmut","kucing","tikus"]
hewanSp1.splice(1,0,"gajah");
console.log(hewanSp1); //["marmut","gajah","kucing","tikus"]

//contoh menambahkan 1 item dan menghapus 2 item, dari index nomor 1
let hewanSp2 = ["Marmut", "Kucing" ,"Tikus"]
hewanSp2.splice(1,2,"Gajah")
console.log(hewanSp2) //["Marmut","Gajah"]

//contoh menambahkan 3 item dan menghapus 2 item, dari index nomor 1
let hewanSp3 = ["Marmut", "Kucing", "Tikus"]
hewanSp3.splice(1,2,"Gajah","Babi","Anjing")
console.log(hewanSp3)//harusnya ["Marmut","Gajah","Babi","Anjing"]

//Try to experiment about splice, karena emang dia merupakan method yang multi fungsi

//Method slice berfungsi untuk memotong array tergantung dari nilai parameter yang dikasih
// contoh.splice(1,4)
/*
* simpelnya ada dua parameter slice(dari-mana, sampe-sebelum-mana)
* parameter pertama dari-mana. itu berfungsi memotong array dari mana
* parameter kedua sampe-sebelum-mana itu berfungsi buat ujung array yang kita potong
* boleh hanya memasang 1 parameter saja, contoh.slice(1)
*/

// contoh memotong dari index 1 sampe ujung
let hewanSl = ["Marmut","Gajah","Jerapah","Singa"]
hewanSl.slice(1)
console.log(hewanSl) //["Marmut","Gajah","Jerapah","Singa"]

//KENAPA GA BERUBAH?
//Jadi ada method yang memang bisa memutasi / mengubah array secara langsung. jadi cukup misal : hewan.push("gajah") lalu nilai variabel hewannya berubah ["kucing","gajah"]

//namun ada juga method yang ga merubah nilai variabelnya, nah si method.slice ini salah satu method yang ga merubah nilai array variabelnya

//lalu bagaimana cara kita tahu bahwa method slice berfungsi memotong array?
//caranya adalah dengan menampung hasil return si slice pada variabel, atau langsung
// console.log(hewan.slice(1))
//jadi gini, langsung aja ke contohnya

//gini caranya ada 2 cara
let hewanTest = ["gajah","jerapah","badak","singa"];
//bisa langsung hajar aja taro dioutput
console.log(hewan.slice(1)) // ["jerapah","badak","singa"]

//yak biasanya sih ditampung di variabel baru

// contoh memotong dari index 1 sampai sebelum index ke 3
// dengan kata lain
// contoh memotong dari index 1 sampai index 2
let hewanTest1 = ["gajah","jerapah","badak","singa"];
let slicedHewan = hewan.slice(1,3);
console.log(slicedHewan) // ["jerapah", "badak"]

//ada lagi yg disebut array 2 dimensi
// contoh

// array 1 dimensi = [1,2,3,4,5,6]
// array 2 dimensi = [[1,2,3],[4,5,6]]

//cara akses elemen array 1 dimensi cukup misal arr[0]
//cara akses elemen array 2 dimensi cukup misal arr[0][0]

//pada array 2 dimensi karena bentukannya begini [[1,2,3],[4,5,6]]
// maka bila kita melakukan indexing pada array tersebut akan menghasilkan tampilan seperti

let arr = [[1,2,3],[4,5,6]]
console.log(arr[0]) //[1,2,3]
console.log(arr[0].length)//3
console.log(arr[0],[0]) //1
console.log(arr[1])// [4,5,6]
console.log(arr[1].length) //3
console.log(arr[1][1])//5

//bila ingin mengecek semua elemen array 2 dimensi dengan loop.. bisa melakukan hal berikut

let arr1 = [[1,2,3],[4,5,6]];

for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length;j++){
        console.log(arr[i][j]) //1 2 3 4 5 6
    }
}

//dan juga array 2 dimensi itu case nyatanya adalah seperti Tabel. kayak dalam tabel ada baris dan kolom, dan biasanya data tabel yang memiliki baris dan kolom menggunakan array 2 dimensi

let orang = [
    ["Bryan", "Indonesia","22 tahun"],
    ["John","Inggris","25 tahun"]
];

console.log('biodata orang')

for (let i = 0; i < orang.length; i++){
    for(let j = 0; j < orang[i].length;j++){
        if(j === 0){
            console.log(`nama: ${orang[i][j]}`)
        } else if (j === 1){
            console.log(`lokasi: ${orang[i][j]}`)
        }else {
            console.log(`umur: ${orang[i][j]}`)
        }
    }
}