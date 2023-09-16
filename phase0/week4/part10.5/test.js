function filter(str) {
    const filter = str.filter(
        element => typeof element === 'number'
    )
    return filter
}
console.log(filter([1,27,4,6,'i']))



//   function cariPelaku(str) {
//     // you can only write your code here!
//     return str.match(/abc+/g).length
//   }
  
//   // TEST CASES
//   console.log(cariPelaku('mabcvabc')); // 2