/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let x = []
    let o = 0;
    let hasil = 0;

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] == 'x'){
            x.push(i);
        }else if (arr[i] == 'o'){
            o = i
        }
    }
    
        if(x[0] > o){
            hasil =  Math.abs(x[0] - o)
        } else if(x[0] < o){
            hasil = Math.abs(o - x[x.length-1])
        }

    return hasil
    

    //let say console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
    // berarti kan :
    // nilai x = [5,7] (karena menggunakan metode push dan menemukan x pada index ke 5 dan 7)
    //nilai o = 2 (karena o = i, dan i menemukan o pada index ke 2)
    //jika x[0] > o maka hasil = x[o] - 2 yg mana hasilnya = 5 - 2
    // pertanyaannya gimana jika 'x' ditemukan didepan? yg berarti x[0] pasti lebih kecil valuenya dari variabel o
    // logicnya ya kurang aja o dengan length variabel x
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2