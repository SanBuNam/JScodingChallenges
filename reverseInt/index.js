function reverseInt(n) {
  const reversed = n.toString()
                    .split('')
                    .reverse()
                    .join('');

  return parseInt(revsered) * Math.sign(n);
}

//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9