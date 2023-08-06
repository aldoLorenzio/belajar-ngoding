function cariMean(arr) {
    // you can only write your code here!
    //Pertama, buat variabel penampung untuk jumlah semua data pada array
    let x = 0;

    //Kedua, buat perulangan untuk menjumlah semua data pada parameter array dan tambahkan pada variabel yg dibuat distep pertama tadi
    for(let i = 0; i <= arr.length-1; i++ ){
        x += arr[i]
    }

    //ketiga buat variabel untuk hasil mean, Math.round merupakan method untuk pembulatan angka terdekat dari bilangan aslinya.. misal untuk angka 0.5 keatas akan dibulatkan keatas, sedangkan 0.49 kebawah akan dibulatkan kebawah
    let mean = Math.round(x/arr.length)

    //keempat, return variabel tersebut
    return mean; 
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
  
  //tips baca dokumentasi Math js untuk pembulatan