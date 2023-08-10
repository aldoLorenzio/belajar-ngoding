//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    // you can only write your code here!

    let beda = arr[1] - arr[0]
    for(let i = 1; i <= arr.length-1; i++){
        if(beda !== arr[i] - arr[i-1]){
            return false;
        }
    }
    return true;
}
  

  //barisan aritmatika itu barisan yg tiap beda jumlah lompatan angka index 0 sampe terakhir itu sama
  //dan untuk mencari beda tiap lompatan tersebut bisa dicari dengan b=Un - Un-1
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false