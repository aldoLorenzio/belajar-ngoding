//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    let jumlahBagi = 0;
    for(let i = 1; i <= angka; i++){
        if(angka % i == 0){
            
    }
  }

    if(jumlahBagi == 2){
        return true
    }else{
        return false
    }
}
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false