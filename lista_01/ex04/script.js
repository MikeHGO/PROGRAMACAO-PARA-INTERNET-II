document.getElementById('btn01').onclick = function () {
	let n1 = parseInt(document.getElementById('n1').value);

	document.getElementById('01').innerHTML = '';

	for (let index = n1; index <= 2020; index++) {
		document.getElementById('01').insertAdjacentHTML('beforeend', `${index} `);
	}
};
