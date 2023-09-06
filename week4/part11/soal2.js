/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping (str) {
    //your code here
    let group = str.split(",")
    let temp = ''
    let hasil = []
    let melee = []
    let ranged = []
    for(let i = 0 ; i <= group.length-1; i++){
        temp = group[i]
        temp = temp.split('-')
        hasil.push(temp)
        if(hasil[i][1] == 'Ranged'){
            ranged.push(hasil[i][0])
        }else  if(hasil[i][1] == 'Melee'){
            melee.push(hasil[i][0])
        }
    }
    if(melee.length == 0 && ranged.length == 0){
        return []
    }
    return [ranged, melee]
}
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []
  