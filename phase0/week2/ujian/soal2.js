/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/
function mengelompokkanAngka(arr) {
    // you can only write your code here!
    let baris1 = []
    let baris2 = []
    let baris3 = []

    let hasil = [baris1, baris2, baris3]

    for(let i = 0; i <= arr.length-1; i++){
        //kenapa baris ke 3 diatas? ingat ya code itu dibaca dari atas ke bawah
        //andai nih baris 1 nya diatas , tar ada beberapa kelipatan 3 yg ga ada di hasil outputnya
        //misal [[2,4,6]]
        //terus baris1 ada di if paling atas
        //hasilnya akan [[2,4,6],[],[]]
        //kenapa array paling terakhir kosong? karena index yg valuenya 6 (kelipatan 3) udah diambil oleh baris1
        //sehingga baris3 ga punya angka kelipatan 3 lagi yg include ke kondisi baris3
        if(arr[i] % 3 == 0){
            baris3.push(arr[i]);
        } else if(arr[i] % 2 == 0){
            baris1.push(arr[i]);
        } else {
            baris2.push(arr[i]);
        }
    }
    return hasil;
}
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]