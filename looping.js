//while()
//for()

/* let i = 5;

  while (i > 5){
    console.log(i)
    i++
} */

//dalam looping ada yg namanya arah, kiri atau kanan, kiri itu pengurangan, kanan itu pertambahan
// hati hati terhadap infinite loop
// Inti dari fundamental looping adalah.. gimana caranya program bisa tereksekusi terus hingga menjadi kondisi false

/* for(let i = 0; i <= 5 ; i++){
    console.log(i)
}
*/

/*let name = "Aldo";

for (let i = 0; i < name.length; i++) {
    console.log(name[i])
}
*/

// oke jadi, pada tipe data string atau array di javascript, ada yg namanya looping
//dimana yg namanya index itu selalu dimulai dari  0


//ada suatu kasus untuk membalikan suatu kata, tanpa menggunakan method reverse

/*let name = "agus"; //lengthnya kan 4, sedangkan total indexnya ada dari 0 - 3;
let result = ""

for (let i = name.length - 1; i >= 0; i--){ 
    result += name[i]
} 
*/

//kenapa variable.length - 1? karena panjang suatu kata dikurangi 1 = index terakhir

for (let i = 0; i < 5; i++){
    for (let j = 0; j <= i; j++){
        console.log(j)
    }
    console.log(``)
}

//kesimpulan looping sering bertemu dengan method length
//looping itu agar membuat code jadi lebih pendek
//looping itu agar membuat suatu proses menjadi dinamis