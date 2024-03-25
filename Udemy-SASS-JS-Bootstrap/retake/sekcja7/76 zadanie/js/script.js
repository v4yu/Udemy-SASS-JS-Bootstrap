const numbersTable = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbersTable.length; i++) {
	console.log(`Iteruje sobie: ${numbersTable[i]}`)
}

function mathOperation(arg1, arg2, arg3) {
	return arg1 + arg2 * arg3
}

console.log(mathOperation(1, 2, 3))

if (numbersTable.length > 5) {
	console.log('TRUE')
} else {
	console.log('FALSE')
}

numbersTable.push(7)

console.log(`Tablica z cyframi ma ${numbersTable.length} elementów.`)
