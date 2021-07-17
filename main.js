function randomChar() {
	let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz!@#$%&";
	return chars[Math.floor(Math.random() * chars.length)];
}

function randomString(length) {
	let str = "";
	for (let i = 0; i < length; i++) {
		str += randomChar();
	}
	return str;
}

function main(){
	let password = randomString(12);
	$("#returnArea").html(password).css("color", "black");
}
