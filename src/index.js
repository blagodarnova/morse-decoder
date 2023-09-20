const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let codes = Object.keys(MORSE_TABLE);
    let morseExpr = '';
  
  for (let i = 0; i < expr.length; i += 10) {
    const letter = expr.slice(i, i + 10);
    if (letter === '**********') {
      morseExpr += ' ';
    } else {
      let morseLetter = '';
      for (let j = 0; j < letter.length; j += 2) {
        const morseCode = letter.slice(j, j + 2);
        if (morseCode === '10') {
          morseLetter += '.';
        } else if (morseCode === '11') {
          morseLetter += '-';
        }
      }
      let decodedLetter = MORSE_TABLE[morseLetter];
      morseExpr += decodedLetter;
    }   
  }
  return morseExpr;
}

module.exports = {
    decode
}
