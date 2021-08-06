// Declare and export the functions here.

//Aca iran las 3 funciones que encriptan un mensaje dado por consola de manera distinta
//La saco de 'message-mixer.js' y la pongo aca
const caesarCipher = (str, amount = 0) => {
    if (amount < 0) {
      return caesarCipher(str, amount + 26);
    }
    let output = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char.match(/[a-z]/i)) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
      output += char;
    }
    return output;
  };
  
  //Lo vuelvo exportable a otros modulos
  module.exports.caesarCipher = caesarCipher;
  
  //La saco de 'message-mixer.js' y la pongo aca
  const reverseCipher = (sentence) => {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split('').reverse().join('');
    }
     return words.join(' ');
  };
  
  //Lo vuelvo exportable a otros modulos
  module.exports.reverseCipher = reverseCipher;
  
  //La saco de 'message-mixer.js' y la pongo aca
  const symbolCipher = (str) => {
    const symbols = {
      'i': '!',
      '!': 'i',
      'l': '1',
      '1': 'l',
      's': '$',
      '$': 's',
      'o': '0',
      '0': 'o',
      'a': '@',
      '@': 'a',
      'e': '3',
      '3': 'e',
      'b': '6',
      '6': 'b'
    }
  
    let output = '';
    for (let i = 0; i < str.length; i++) {
      let char = str.toLowerCase()[i];
  
      if (symbols[char]) {
        output += symbols[char]
      } else {
        output += char;
      }
    }
    return output;
  };
  
  //Lo vuelvo exportable a otros modulos
  module.exports.symbolCipher = symbolCipher;
