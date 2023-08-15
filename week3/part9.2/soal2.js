//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    let hasil1 = [];
    let hasil2 = [];
    let max = 0;

    for(let i = 0; i <= angka1; i++){
        if(angka1 % i == 0){
           hasil1.push(i) ;
        }
    }

    for(let j = 0; j <= angka2; j++){
        if(angka2 % j == 0)
        hasil2.push(j)
    }

    for(let i = 0; i <= hasil1.length-1;i++){
        for(let j = 0; j <= hasil2.length-1;j++){
            if(hasil1[i] === hasil2[j] && max < hasil1[i]){
                max = hasil1[i]
            }
        }
    }

    return max;

}
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1