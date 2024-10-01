let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	let newarray=[]
	for(let a of arr){
		newarray.push(++a)
	}
	return newarray
}

alert(incrementArray(arr));
