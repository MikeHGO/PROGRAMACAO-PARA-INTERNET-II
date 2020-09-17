document.getElementById('btn01').onclick = function () {
	let n1 = parseInt(document.getElementById('n1').value);

	document.getElementById('01').innerHTML = '';

	for (let index = 0; index <= 10; index++) {
		document
			.getElementById('01')
			.insertAdjacentHTML('beforeend', `${n1} X ${index} = ${n1 * index}<br>`);
	}
};
