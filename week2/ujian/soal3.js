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

    let animalSort = animals.sort()
    let array2 = []
    let hasil = [];

    for (let i = 0; i <= animals.length-1; i++){
       array2.push(animals[i])
       if(array2[i][0] === "a"){
        hasil += array2;
       }
    }
    return hasil;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]