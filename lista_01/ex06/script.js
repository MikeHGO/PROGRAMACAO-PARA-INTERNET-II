let boxB = document.getElementById('01');
let boxC = document.getElementById('02');

document.getElementById('btnLimpar').onclick = function () {
	boxB.innerHTML = '';
};

document.getElementById('btnLimpar2').onclick = function () {
	boxC.innerHTML = '';
};

document.getElementById('btnEnviar').onclick = function () {
	let text = document.getElementById('n1');
	boxB.innerHTML = text.value.trim() > 0 ? text.value : boxB.innerHTML;
	text.value = '';
};

document.getElementById('btnCopiar').onclick = function () {
	boxC.innerHTML = boxB.innerHTML;
};
