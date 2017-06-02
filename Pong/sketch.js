var sticks = [];
var ball;
var wallDis = 50;
var score = [];
var won = false;
var choices = ['left', 'right'];
var song;

function preload(){
	chick = loadImage('images/chick.png');
	farm = loadImage('images/Farm.jpg');
	song = loadSound('music/chick_song.mp3');
}

function setup(){
	var canvas = createCanvas(800, 800);
	sticks[0] = new Stick(0+wallDis, 'left');
	sticks[1] = new Stick(width-wallDis, 'right');
	ball = new Ball(chick);
	score[0] = new ScoreBoard(width/3, 50);
	score[1] = new ScoreBoard(width*2/3, 50);
	var x = (windowWidth - width)/2;
	var y = (windowHeight - height)/2;
	canvas.position(x, y);
	song.loop();
}

function draw(){
	if(!won){
		imageMode(CORNER);
		background(farm);
		imageMode(CENTER);
		for(var i =0; i<sticks.length; i++){
			sticks[i].move();
			sticks[i].show();
		}
		strokeWeight(5);
		stroke(5);
		textStyle(BOLD);
		textSize(50);
		fill(255, 0, 0);
		ball.move();
		ball.show();

		score[0].show();
		score[1].show();

		for(var i = 0; i<sticks.length; i++){
			if(ball.hits(sticks[i]) && !ball.match(choices[i])){
				ball.bounce(sticks[i]);
			}
		}

		if(ball.goal() === "right"){
			score[0].score();
			ball.reset();
			if(score[0].win()){
				won = true;
			}
		}
		else if(ball.goal() === "left"){
			score[1].score();
			ball.reset();
			if(score[1].win()){
				won = true;
			}
		}
	}
	else{
		fill(255);
		imageMode(CORNER);
		background(farm);
		if(score[0].win()){
			text("Player 1 Wins!", width/2-140, height/2);
		}
		else if(score[1].win()){
			text("Player 2 Wins!", width/2-140, height/2);
		}
	}
}

function keyReleased(){
	if(keyCode === UP_ARROW || keyCode === DOWN_ARROW){
		sticks[1].setDir(0);
	}
	if(key === 'W' || key === 'S'){
		sticks[0].setDir(0);
	}
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		sticks[1].setDir(-1);
	}
	else if(keyCode === DOWN_ARROW){
		sticks[1].setDir(1);
	}
	else if(key === 'W'){
		sticks[0].setDir(-1);
	}
	else if(key === 'S'){
		sticks[0].setDir(1);
	}
}

/*
function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}*/
