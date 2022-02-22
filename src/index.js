
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let ar=[]
	if(arguments.length===0) return []
	if(matrix.length===0) return []
	else{
		for (let i = 0; i < matrix.length; i++) {
			for (let j=0; j<matrix[i].length; j++){
				let colInd=i%2===0
				? j
				:matrix[i].length-j-1
				ar.push(matrix[i][colInd])
			}
		}
	}

	return ar
}
