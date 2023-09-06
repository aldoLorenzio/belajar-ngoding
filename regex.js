/*
KEGUNAAN REGULAR EXPRESSION (Regex)

Dengan menggunakan regex, kita dapat menyederhanakan pencarian text string atau interger dalam sebuah variabel. Mungkin kalian berpikir untuk pencarian text kan bisa pake fungsi- fungsi String dan Array seperti substr(), indexOf(), slice(), dll.

Tetapi bagaimana kalo pencarian rumit? dan ada pattern yang harus ditentukan? Hal ini jauh lebih mudah kalau kita gunakan regex. Contoh sederhananya coba temukan / hitung kata 'far' di dalam paragraph di bawah ini :

let paragraph =`
far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics,
a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village
and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!`

console.log(paragraph.match(/far/g)); // ["far", "far", "far", "far"] ada 4 far




Kuncinya untuk memahami Regex adalah mampu menghapal simbol simbol dibawah ini, beserta kegunaannya

. // - Mencocokan karakter apapun kecuali line breaks (jeda baris/enter)
* // - Mencocokan 0 atau lebih dari karakter terdahulu
+ // - Mencocokan 1 atau lebih dari karakter terdahulu.
? // - Karakter terdahulu menjadi opsional. Mencocokan 0 atau 1.
\d // - Mencocokan digit apapun
\w // = Mencocokan karakter pada sebuah kata (alphanumeric dan underscore/garis bawah)
$ // - Mencocokan ujung dari sebuah string.
^ // - Mencocokan awal dari sebuah string.
[^a-z] // - Ketika didalam sebuah class karakter, tanda ^ artinya NOT; dalam kasus ini, regex akan mencocokan apapun yang bukan karakter lowerCase

nb: Ga perlu mati mati an di hapal, klo lupa tinggal googling
*/


/*
PENGGUNAAN REGULAR EXPRESSIONS DALAM JAVASCRIPT

MENULIS REGEX
Menulis regex dalam javaScript bisa dalam 2 bentuk, yaitu antara dengan membuat regex object dengan menggunakan new RegExp(), atau menggunakan nilai literal yang diapit oleh karakter flash (/)

*/

//ada 2 bentuk
let regexContohSatu = new RegExp("abc")
let regexContohDua = /abc/;

/*
Method.test()

Method.test() akan mengembalikan nilai true atau false, sesuai dengan pattern regex yang dibuat
*/

// let message = 'Regex itu Mudah!';
// console.log(/[A-Z]/.test(message));
// mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. dan true, karena regex itu memang mudah :)

// let messageAllLowerCase = 'regex itu susah?';
// console.log(/[A-Z]/.test(messageAllLowerCase))
//mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. statement tersebut memang false! regex tidak sesulit yang kita kira

let regexPattern = new RegExp('[A-Z]');

let message = 'Regex itu Mudah!';
console.log(regexPattern.test(message));
// mengembalikan nilai true karena minimal satu karakter memenuhi pattern A-Z. Dan true, karena regex itu memang mudah :)

let messageAllLowerCase = 'regex itu susah?';
console.log(regexPattern.test(messageAllLowerCase));
// mengembalikan nilai false karena tidak ada satupun karakter yang memenuhi pattern A-Z. statement tersebut juga memang false! regex tidak sesulit yang kita kira!


