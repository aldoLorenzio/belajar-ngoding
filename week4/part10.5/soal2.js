/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals (str) {
  //code di sini
  let hasil = str;
  let vocal = 'aiueo';
  let changed = 'bjvfp'
  for(let i = 0; i<= str.length-1; i++){
    for(let j = 0; j <= changed.length-1; j++){
      if(hasil[i] == vocal[j]){
        hasil = hasil.replace(hasil[i],changed[j])
      }else if(hasil[i] == vocal[j].toUpperCase()){
        hasil = hasil.replace(hasil[i],changed[j].toUpperCase())
      }
    }
  }
  return hasil;
}

function reverseWord (str) {
  //code di sini
  let hasil = ''
  for(let i = str.length-1; i>=0 ; i--){
    hasil+=str[i]
  }
  return hasil;
}

function setLowerUpperCase (str) {
  //code di sini
  let hasil = ''
  for(let i = 0; i <= str.length-1; i++){
    if(str[i] == str[i].toUpperCase()){
        hasil+=str[i].toLowerCase()
    }else if(str[i] == str[i].toLowerCase()){
        hasil+= str[i].toUpperCase()
    }
}
return hasil;
  
}

function removeSpaces (str) {
  //code di sini
  let hasil = str.split(" ").join("")
  return hasil;
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  let changeVocal = changeVocals(name)
  let reverse = reverseWord(changeVocal)
  let lowerUpper = setLowerUpperCase(reverse)
  let password = removeSpaces(lowerUpper)
  return password
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'