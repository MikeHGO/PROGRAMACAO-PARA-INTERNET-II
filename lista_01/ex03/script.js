document.getElementById('btn01').onclick = function () {
	let n1 = parseInt(document.getElementById('n1').value);

	document.getElementById('01').innerHTML = `O esporte será ${sport(n1)}`;
};

function sport(n1) {
	if (n1 === 5) return 'basquete';
	if (n1 === 1) return 'tênis';
	if (n1 === 11) return 'futebol';
	if (n1 === 6) return 'vôlei';
	return '.:: sem dados para o número informado ::.';
}
