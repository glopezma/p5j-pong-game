function Stick(x){
	this.x=x;
	this.y=height/2; 
	this.yspeed = 2.5;
	this.dis=75;
	this.ydir = 0;

	this.show = function() {
		fill(255);
		rectMode(CENTER);
		rect(this.x, this.y, 10, this.dis*2);
	}

	this.setDir = function(dir){
		this.ydir = dir*this.yspeed;
	}

	this.move = function(){
		if(this.y-this.dis <= 0){
			if(this.ydir <= -1 ){
				this.ydir = 0
			}
			else{
				this.y += this.ydir*this.yspeed;
			}
		} 
		else if (this.y+this.dis >= height){
			if(this.ydir >= 1){
				this.ydir = 0;
			}
			else{
				this.y += this.ydir*this.yspeed;
			}
		}
		else{
			this.y += this.ydir*this.yspeed;
		}
	}
}