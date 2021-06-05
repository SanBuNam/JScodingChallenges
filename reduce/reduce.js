const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

function intersection(arr) {
  const jointArr = [];
  // joint arrays
  if (typeof(arr) == "object") {
    for (var i = 0; i < arr.length; i++) {
      arr[i].forEach(x => jointArr.push(x));
    }
  }
  // remove duplicates
  return jointArr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
}

console.log(intersection([arr1, arr2, arr3]));
