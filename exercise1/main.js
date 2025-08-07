
function changeVisible(event) {
	let cb = event.target;

	let img = document.querySelector(`#img${cb.id[cb.id.length - 1]}`);
	img.toggleAttribute('hidden');
}

function changeColor2(event) {
	let tcol = event.target;

	let img = document.querySelector(`#img${tcol.id[tcol.id.length - 1]}`);
	img.style.backgroundColor = tcol.value;
	img.parentElement.style.backgroundColor = tcol.value;
}

document.querySelector('#cbImg1').addEventListener('change', changeVisible);
document.querySelector('#cbImg2').addEventListener('change', changeVisible);
document.querySelector('#cbImg3').addEventListener('change', changeVisible);
document.querySelector('#cbImg4').addEventListener('change', changeVisible);

document.querySelector('#tCol1').addEventListener('change', changeColor2);
document.querySelector('#tCol2').addEventListener('change', changeColor2);
document.querySelector('#tCol3').addEventListener('change', changeColor2);
document.querySelector('#tCol4').addEventListener('change', changeColor2);

