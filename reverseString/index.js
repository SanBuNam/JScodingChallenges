

function reverse(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

function reverse2(str) {
  return str.split('')
            .reverse()
            .join('');
};

function reverse3(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}