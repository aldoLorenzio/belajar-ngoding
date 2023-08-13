/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    //untuk sekarang algoritma yg tak pikirin
    //ini kan disuruh buat grup array sesuai dengan huruf pertama value tersebut
    //misal console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
    //maka outputnya = [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
    // yg harus kita lakuan adalah... ambil perulangan untuk mengambil semua value dalam array satu persatu
    // jika index ke 0 dalam suatu array tsb adalah 'a' maka cout semua value tersebut dalam sebuah array
    //jika index ke 0 dalam suatu array tsb adalah 'c' maka cout semua value tersebut dalam sebuah array

    let sorting = animals.sort()
    let penampung = []
    let hasil = [];

    for (let i = 0; i <= animals.length-1; i++){
      if(i == 0){
        penampung.push(sorting[i])
      }else if (penampung[0][0] === sorting[i][0]){
        penampung.push(sorting[i])
      }else{
        hasil.push(penampung)
        penampung = [sorting[i]]
      }
    }
    hasil.push(penampung);
    return hasil;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]