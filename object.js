//Object adalah kumpulan tidak berurut yang merangkai beberapa property dan property memiliki nama/key dan value (key-value pairs).

//contoh object
let myObj = {
    myKey: 'myValue'
};

//lengakpnya seperti ini:
const myObj1 = {
    nama: 'Aldo',
    kelas: '12',
    hobby:['main','makan','tidur'],
    detail:{
        tinggi: 174,
        berat: 75
    }
};

//cara akses object bisa seperti ini:
console.log(myObj1);
console.log(myObj1.nama);
console.log(myObj1.kelas);
console.log(myObj1.hobby[1]);
console.log(myObj1.detail.tinggi);
const detail =myObj1.detail;

console.log(detail.berat)

//cara memanipulasi isi object
myObj1.kelakukan ='baik'
//atau bisa seperti ini
myObj1['isNolep'] = true

//atau dengan loop
let objAngka = {};
for (let i = 1; i<= 3; i++){
    objAngka[i] =i
}
console.log(objAngka)

//cara menghapus tipe data object
delete myObj.isNolep; //atau delete myObj['isNolep'];

//Loop khusus untuk tipe data object
for(const key in myObj){
    console.log(`${key}: ${myObj[key]}`)
}