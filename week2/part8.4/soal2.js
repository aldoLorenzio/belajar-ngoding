/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
  //kenapa num + 1? karna biar tidak output angka palindrome yg diinputkan... (program ingin mencari angka palindrome selanjutnya.. bukan angka palindrome yg diinput)
  let i = num;
  // i = 937286, num = 937286
  
  //kenapa kondisi while > 0 dengan incremeent ++? biar program mengecek angka satu persatu tanpa henti
  while (i > 0) {
    
    //Bikin variabel untuk menampung string angka yg terbalik dari metode .toString();
    let angkaBalik = "";
    let numStr = i.toString();
    // di while pertama i = 937286 , num = 937286
    // angkaBalik = ""
    // numStr = "937286"
    
    
    for(let i = numStr.length-1; i>=0; i--){
      //klo i = 5 
      angkaBalik += numStr[i];
      //numStr ="937286"
      //jadi klo misal aku pengen looping dari angka kebelakang ke depan... aku harus pake index ke I nya numStr
    }
    console.log(numStr,angkaBalik)
    
    if(angkaBalik == numStr){
      return true;
    } else {
      return false;
    }
    
  }
}

console.log(angkaPalindrome(65356))



  
  // TEST CASES
  // console.log(angkaPalindrome(8)); // 9
  // console.log(angkaPalindrome(10)); // 11
  // console.log(angkaPalindrome(117)); // 121
  // console.log(angkaPalindrome(175)); // 181
  // console.log(angkaPalindrome(1000)); // 1001