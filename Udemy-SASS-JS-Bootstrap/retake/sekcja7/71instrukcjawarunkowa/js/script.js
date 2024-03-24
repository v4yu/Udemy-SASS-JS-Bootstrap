const passLength = 12

if (passLength >= 10) {
	console.log('Bardzo dobre Hasło.')
} else if (passLength >= 5 && passLength < 10) {
	console.log('Dobre Hasło.')
} else if (passLength <= 5) {
	console.log('Słabe Hasło.')
}
