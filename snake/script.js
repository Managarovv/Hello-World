function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let canvas = document.getElementById('game');
let td = canvas.getContext('2d');
let count = 16;
let timerId;
let argument = true;

let snake = {
	x: 160,
	y: 160,
	dx: 16,
	dy: 0,
	Cells: [],
	mCells: 4
};

let apple = {
	x: 0,
	y: 0
};

function loop() {
	createSnake();
	createApple();
	document.getElementById('pause').disabled = false;
	document.getElementById('div').innerHTML = "";
	timerId = setInterval(interval, 600);
};

function interval(){
	snake.x += snake.dx;
	snake.y += snake.dy;
	snake.Cells.unshift([snake.x, snake.y]);
	td.fillStyle = "green";
	td.fillRect(snake.x, snake.y, count, count);

	if (snake.Cells.length > snake.mCells){
		let deletedS = snake.Cells.pop();
		//console.info(deletedS);
		let deletedX = deletedS[0];
		let deletedY = deletedS[1];
		td.clearRect(deletedX, deletedY, count, count);
	}

	if (snake.x == apple.x && snake.y == apple.y) {
		snake.mCells++;
		createApple();
	}

	for (var i = 1; i < snake.Cells.length; i++) {
		let link = snake.Cells[i];
		if(link[0] == snake.x && link[1] == snake.y){
			setTimeout(clearInterval(timerId), 1);
			document.getElementById('div').innerHTML = "game over, you score:"+snake.mCells;
		} 
	}

	if (snake.x==canvas.height || snake.y==canvas.width || snake.x==0 || snake.y==0){ 
	setTimeout(clearInterval(timerId), 1)
	//console.info("timeout")
	document.getElementById('div').innerHTML = "game over, you score:"+snake.mCells;
	};
}

function createApple() {
	td.fillStyle = "red";
	td.clearRect(apple.x, apple.y, count, count);
	apple.x = getRandomInt(0, 25) * count;
	apple.y = getRandomInt(0, 25) * count;
	td.fillRect(apple.x, apple.y, count, count);
	//console.info("apple created"+`${apple.x}${apple.y}`);
}

function createSnake() {
	snake.x = 160;
	snake.y = 160;
	snake.dx = 16;
	snake.dy = 0;
	snake.Cells = [];
	snake.mCells = 4;
	argument = true;
	td.clearRect(0, 0, 400, 400);
	setTimeout(clearInterval(timerId), 1);
	td.fillStyle = "green";
	for (var i = 0; i < snake.mCells; i++) {
		snake.x += snake.dx;
		snake.y += snake.dy;
		snake.Cells.unshift([snake.x, snake.y]);
		td.fillRect(snake.x, snake.y, count, count);
	}
}

function arrows(event) {
	//left 37, up 38, right 39, down 40
	if (event.keyCode == 40 && snake.dy == 0) {
		snake.dy = 16;
		snake.dx = 0;
	}
	if (event.keyCode == 39 && snake.dx == 0) {
		snake.dx = 16;
		snake.dy = 0;
	}
	if (event.keyCode == 38 && snake.dy == 0) {
		snake.dx = 0;
		snake.dy = -16;
	}
	if (event.keyCode == 37 && snake.dx == 0) {
		snake.dx = -16;
		snake.dy = 0;
	}
	if (event.code == "KeyP") Pause();
}

function Pause() {
	if (argument){
		setTimeout(clearInterval(timerId), 1);
		argument = false;
		document.getElementById('div').innerHTML = "pause";
	}
	else {
		timerId = setInterval(interval, 600);
		argument = true;
		console.info(argument);
		document.getElementById('div').innerHTML = "";
	}
}

document.getElementById('start').addEventListener("click", loop);
document.getElementById('pause').addEventListener("click", Pause);
document.addEventListener('keydown', arrows);