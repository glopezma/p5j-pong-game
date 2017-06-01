function ScoreBoard(x, y){
	this.y = y;
	this.x = x;
	this.value = 0;

	this.score = function(){
		this.value++;
	}

	this.show = function(){
		text(this.value, this.x, this.y);
	}

	this.win = function(){
		return(this.value === 10);
	}
}