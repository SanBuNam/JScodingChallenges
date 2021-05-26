//ES 5 Syntax Possible Solution:

function longestString1(arr) {
	var longest = '';
	for (var i = 0; i < arr.length; i++) { 
		if (arr[i].length > longest.length) { 
			longest = arr[i]; 
		}
	}
	return longest;
}

//ES 6 Syntax Possible Solution:

const longestString2 = (arr) => {
	let longest = '';
	arr.forEach((item) => {
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest;
};