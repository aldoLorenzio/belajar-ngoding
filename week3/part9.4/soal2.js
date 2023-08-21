//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    //nilai sorted = false;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let tampung = [];
    for(let i = 0; i <= str.length-1; i++){
      for(let j = 0; j <= alphabet.length-1; j++){
        if(str[i] == alphabet[j]){
          tampung.push[j]
        }
      }
    }
    

    // let sorted = false;

    // for(let i = 0; i <= str.length-1; i++){
    //   sorted = false;

    //   for(let j = 0; j <= str.length-1; j++){
    //     if(str[j] > str[j + 1]){
    //       let temp = str[j];
    //       str[j] = str [j + 1];
    //       str[j + 1] = temp;
    //     }
    //   }

    //   if (!sorted){
    //     break;
    //   }
    // }
    // return str;
}

  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  // console.log(urutkanAbjad('truncate')); // 'acenrttu'
  // console.log(urutkanAbjad('developer')); // 'deeeloprv'
  // console.log(urutkanAbjad('software')); // 'aeforstw'
  // console.log(urutkanAbjad('aegis')); // 'aegis'