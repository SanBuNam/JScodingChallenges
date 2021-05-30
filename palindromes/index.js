

// function palindromes(str) {
//   const reversed = str.split('').reverse().join('');
//   debugger;
//   return str === reversed;
// }

function palindromes(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length -i -1];
  })
}

palindromes('abcba'); //true

module.exports = palindromes;