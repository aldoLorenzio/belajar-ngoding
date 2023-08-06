function hitungJumlahKata(kalimat) {
    //Pertama buat variabel dengan method .split(" ") untuk membuat sebuah array dengan value string per kata
    // misal "I have a dream" maka split akan mereturn sebuah array = ["I","have","a","dream"] 
    let cekKalimat = kalimat.split(" ");

    //kedua bikin variabel untuk cek ada berapa length dari variabel cekKalimat
    //misal cekKalimat memiliki value ["I","have","a","dream"] maka dia akan mereturn 4
    let cek = cekKalimat.length
    return cek;
    
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5