document.querySelector('#right').addEventListener('click', function() {
	let ball = document.querySelector('#ball');
	ball.remove();
	document.querySelector('.box6').appendChild(ball);
	ball.innerHTML = (ball.innerHTML * 1) + 1;
})