document.getElementById('btn01').onclick = function () {
	let n1 = parseInt(document.getElementById('n1').value);
	let n2 = parseInt(document.getElementById('n2').value);

	document.getElementById('01').innerHTML = `${
		n1 === n2 ? 24 : n1 > n2 ? Math.abs(n1 - 24) + n2 : n2 - n1
	} horas`;
};
