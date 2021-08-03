let box = document.querySelectorAll('.box');
let currentActive = 4;
let ball = document.querySelector('#ball');



document.querySelector('#right').addEventListener('click', function() {
	rightClick();
});

document.querySelector('#left').addEventListener('click', function() {
	leftClick ();
});

document.querySelector('#up').addEventListener('click', function() {
	upClick ();
});

document.querySelector('#down').addEventListener('click', function() {	
	downClick();
});

document.addEventListener('keydown', function(e) {
	if (e.key =='ArrowRight'){
		rightClick();
	}else if (e.key =='ArrowLeft'){
		leftClick ();
	}else if (e.key =='ArrowDown'){
		downClick();
	}else if (e.key =='ArrowUp'){
		upClick ();
	}
});

//document.addEventListener('keydown', function(e) {
//	console.log (e)
//});

function moveAndIncrease(){ 
	ball.innerHTML = (ball.innerHTML * 1) + 1;
};	

function stopAndReduce() {
	ball.innerHTML = (ball.innerHTML * 1) - 1;
};

function rightClick () {
	if(currentActive == 2 || currentActive == 5 || currentActive == 8){
		stopAndReduce();
	} else {
		ball.remove();
		box[currentActive+1].appendChild(ball);
		moveAndIncrease();
		currentActive++;
	} 
	checkSum(); 
};

function leftClick () {
	if(currentActive == 0 || currentActive == 3 || currentActive == 6){
		stopAndReduce();
	} else {
		ball.remove();
		box[currentActive - 1].appendChild(ball);
		moveAndIncrease();
		currentActive--;
	}
	checkSum();	
};

function upClick () {
	if(currentActive == 0 || currentActive == 1 || currentActive == 2){
		stopAndReduce();
	} else {
		ball.remove();
		box[currentActive - 3].appendChild(ball);
		moveAndIncrease();
		currentActive-=3;
	} 	
	checkSum();
};

function downClick () {
	if(currentActive == 6 || currentActive == 7 || currentActive == 8){
		stopAndReduce();
	} else {
		ball.remove();
		box[currentActive + 3].appendChild(ball);
		moveAndIncrease();
		currentActive+=3;
	}	
	checkSum(); 	
};

function checkSum () {
    let sum = 0;
    for (let i = 0; i < box.length; i++ ) {
        sum += box[i].innerText * 1
    }
    if (sum == 25 || sum <= -5) {
		ball.remove();
		currentActive = 4;
		box[currentActive].appendChild(ball);
		ball.innerHTML = 0;
    }
};