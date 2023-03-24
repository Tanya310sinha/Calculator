var result = document.getElementById("result");

function getResult(num) {
	if (num == '=') {
		result.value = eval(result.value);
	} else {
		result.value += num;
	}
}

function clearScreen() {
	result.value = '';
}

function back() {
	var str = result.value;
	str = str.slice(0, str.length - 1);
	result.value = str;
}
