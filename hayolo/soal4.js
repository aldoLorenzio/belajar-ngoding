/*
  menghitung jumlah karakter yang duplikat
  misal ada aabbc maka a dan b adalah duplikat maka return 2
  misal ada AaBbc maka a dan b juga duplikat ga peduli dia huruf besar atau tidak
*/
function duplicateCount(text){
  //...
  let str = text
  let totalHuruf = {};
  
  for (let i = 0; i < str.length; i++) {
    const hurufKecil = str[i].toLowerCase();
    if (totalHuruf[hurufKecil] === undefined) {
      totalHuruf[hurufKecil] = 1
    } else {
      totalHuruf[hurufKecil] += 1
    }
  }

  let count = 0
  for(let j in totalHuruf){
    if(totalHuruf[j] > 1){
    count +=1
    }
  }
  return count
}

console.log(duplicateCount("")) //0
console.log(duplicateCount("abcde")) //0
console.log(duplicateCount("aabbcde")) //2
console.log(duplicateCount("aabBcde")) //2
console.log(duplicateCount("Indivisibility")) //1
console.log(duplicateCount("Indivisibilities")) //2
console.log(duplicateCount("abcabcdABcefGhg")) //4