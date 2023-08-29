/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    //kali ini yg gw pikirin itu length f kurang b itu berapa
    //tar di kali sama 2000
    let hasil = []
    let naikDari = 0;
    let tujuan = 0;
    for(let i = 0; i <= arrPenumpang.length-1; i++){
        let data = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0,
        }

        for(let j = 0; j <= rute.length-1;j++){
            if(arrPenumpang[i][1] == rute[j]){
                naikDari = j
            }else if(arrPenumpang[i][2] == rute[j]){
                tujuan = j
            }
        }
        let total = 2000 * (tujuan - naikDari)
        data.bayar = total
        hasil.push(data)

    }
    return hasil;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]