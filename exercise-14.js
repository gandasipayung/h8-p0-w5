// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  //code di sini
  // var split = str.split('')
  // for(var i = 0 ; i < split.length ; i++){
  //   if(split[i] === 'a'){
  //     split[i] = 'b'
  //   } else if(split[i] === 'i'){
  //     split[i] = 'j'
  //   } else if(split[i] === 'u'){
  //     split[i] = 'v'
  //   } else if(split[i] === 'e'){
  //     split[i] = 'f'
  //   } else if(split[i] === 'o'){
  //     split[i] = 'p'
  //   } else if(split[i] === 'A'){
  //     split[i] = 'B'
  //   } else if(split[i] === 'I'){
  //     split[i] = 'J'
  //   } else if(split[i] === 'U'){
  //     split[i] = 'V'
  //   } else if(split[i] === 'E'){
  //     split[i] = 'F'
  //   } else if(split[i] === 'O'){
  //     split[i] = 'P'
  //   }
  var arrStr = str.split('');
  var alfabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var hurufVokal = 'aiueoAIUEO';
  var indeks;
  var hasil = [];
  
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < hurufVokal.length; j++) {
      if (arrStr[i] === hurufVokal[j]) {
        indeks = alfabet.indexOf(arrStr[i]) + 1;
        arrStr[i] = alfabet[indeks];
      }
    }
    hasil.push(arrStr[i]);
  }
  
  return hasil;
}

function reverseWord (str) {
  //code di sini
  var reverse = [];
  for(var i = str.length-1 ; i >= 0 ; i--){
    reverse.push(str[i])
  }
  return reverse
}

function setLowerUpperCase (str) {
  //code di sini
  var hasil = '';
  
  for (let i = 0; i < str.length; i++) {
    uppercase = str[i].toUpperCase();
    lowercase = str[i].toLowerCase();
    
    if (str[i] === uppercase) {
      hasil += lowercase;
    } else if (str[i] === lowercase) {
      hasil += uppercase;
    } else {
      hasil += str[i];
    }
  }
  
  return hasil;
}

function removeSpaces (str) {
  //code di sini
  return str.replace(' ', '')
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    var ubahHurufVokal = changeVocals(name);
    var balikKata = reverseWord(ubahHurufVokal);
    var balikLowerUpper = setLowerUpperCase(balikKata);
    var hapusSpasi = removeSpaces(balikLowerUpper);
    return hapusSpasi;
  }
}
// console.log(changeVocals ('Sergei Dragunov'));

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'