let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	let new=[]
	for(let a of arr){
		new.push(++a)
	}
	return new
	
}

alert(incrementArray(arr));
