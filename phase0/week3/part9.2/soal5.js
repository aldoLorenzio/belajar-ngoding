//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let hasil = ''
    for(let i = 0; i <= kata.length-1; i++){
        for(let j = 0; j <= alphabet.length-1;j++){
            if(kata[i] == alphabet[j]){
                hasil+= alphabet[j+1]
            }
        }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu

  //DONE