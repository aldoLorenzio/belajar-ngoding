//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
    // you can only write your code here!
    // bikin variabel dulu dengan urutan alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //bikin variabel tampung buat menampung hasil parameter jika sama dengan value alphabet
    let tampung = [];

    //logic nested loopnya, jika parameter [i] == alphabet[j] push ke variabel tampung
    //misal str = 'wow' , w check dengan a-z , o check dengan a-z. w check dengan a-z
    //jika punya value yang sama dengan alphabet[j] maka push ke tampung menjadi ['w','o','w']
    for(let i = 0; i <= str.length-1; i++){
      for(let j = 0; j <= alphabet.length-1; j++){
        if(str[i] == alphabet[j])
        tampung.push(j)
      }
    }  

    //buat variabel dengan value false
    //logicnya jika tampung[j] > tampung[j + 1] maka tampung [j] = tampung[j+1] (dibalik) dan value sorted menjadi true
    let sorted = false;

    for(let i = 0; i <= tampung.length-1; i++){
      sorted = false;
      for(let j = 0; j <= tampung.length-1; j++){
        if(tampung[j] > tampung[j + 1]){
          let temp = tampung[j];
          tampung[j] = tampung [j + 1];
          tampung[j + 1] = temp;
          sorted = true
        }
      }
      //jika tidak ada value yg diswap maka break loop j nya
      if (!sorted){
        break;
      }
    }

    //buat variabel dengan value string kosong
    //tambahkan variabel tsb dengan value variabel alphabet index tampung index i (kok ga langsung tampung[i]? kan tampung [i] cuman punya nilai index ke berapa aja yg kesorted dari parameter. bukan value stringnya... klo mau ambil value stringnya ya dari alphabet[tampung[i]])
    let hasil = '';
    for(let i = 0; i <= tampung.length-1; i++){
      hasil += alphabet[tampung[i]]
    }

    return hasil;
}

  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'