function reverseInt(n) {
  const reversed = n.toString()
                    .split('')
                    .reverse()
                    .join('');
                    
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51 
//   reverseInt(-90) === -9