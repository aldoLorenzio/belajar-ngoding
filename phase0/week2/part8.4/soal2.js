/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
  //kenapa num + 1? karna biar tidak output angka palindrome yg diinputkan... (program ingin mencari angka palindrome selanjutnya.. bukan check angka palindrome yg diinput)
  let i = num + 1;
   
  //kenapa kondisi while i > 0 dengan incremeent ++? biar program mengecek angka satu persatu keatas tanpa henti
  while (i > 0) {
    
    //Bikin variabel untuk menampung string angka yg terbalik dari metode.toString();
    let angkaBalik = "";
    let numStr = i.toString();
    
    for(let j = numStr.length - 1; j>=0; j--){
      // semisal parameter num nya memiliki value 1256
      // maka i akan memiliki value 1257, sehingga numStr akan memiliki value "1257" (ingat i = num + 1)
      // setelah itu angkaBalik akan menambahkan satu persatu valuenya dari numStr index [j] paling terakhir (karena j.. di dekalrasi dengan numStr.length-1 dengan kondisi j >= 0 dan increment j-- )
      // dari perulangan tersebut angkaBalik akan memperoleh value "7521"
      angkaBalik += numStr[j];
      
    }
    
    //disini akan terjadi pengecekan jika misal angkaBalik memiliki value yg sama dengan numStr... maka return angkaBalik, namun jika tidak memiliki value yg sama... maka lanjutkan perulangan whilenya 
    if(angkaBalik == numStr){
      return angkaBalik;
    } else {
      //cukup pake i++ aja, jangan pake return i++, karena jika memakai return i++ itu akan menyebabkan perulangan berhenti.. seperti break namun mengembalikan nilai;
      i++;
    }
    
  }
}


  
  //TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001