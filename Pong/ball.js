function Ball(img){
	this.x = width/2;
	this.y = height/2;
	this.r = 25;
	this.lastHit = "none";

	this.yspeed = 2.2;
	this.xspeed = 2.2;

	if (int(random(2))){
		this.xdir = -1;
		this.ydir = random(-1,1);
	}
	else{
		this.xdir = 1;
		this.ydir = random(-1,1);
	}

	while(this.ydir === 0){
		this.ydir=random(-1,1);
	}

	this.move = function(){
		this.x = this.x + this.xspeed*this.xdir;
		if(this.edge()){
			this.ydir *= -1;
		}
		this.y = this.y + this.yspeed*this.ydir;
	}

	this.show = function(){
		image(img, this.x, this.y, this.r*2, this.r*2);
	}

	this.hits = function(stick){
		var xd = this.x-stick.x;
		var yd = this.y-stick.y;
		if(xd < 5){
			xd *= -1;
		}
		if(yd < 0){
			yd *= -1;
		}
		if(xd<this.r+2 && yd<stick.dis){
			return true;
		}
		else{
			return false;
		}
	}

	this.bounce = function(stick){
		this.xdir   *= -1;
		this.xspeed += 0.2;
		if(stick.ydir != 0){
			this.ydir  += stick.ydir/2;
			this.lastHit = stick.name;
		}
	}

	// this.bounce = function(stick){
	// 	this.xdir   *= -1;
	// 	this.xspeed += 0.2;
	// 	if(stick.ydir != 0){
	// 		if(this.y < stick.y){
	// 			yspeed = map(stick.y, stick.y-stick.dis, stick.yspeed/2, stick.yspeed*2);
	// 			yspeed = constrain(speed, )
	// 		}
	// 		else if(this.y > stick.y){
	// 			this.ysped += map(stick.y, stick.y+stick.dis, stick.yspeed/2, stick.yspeed*2);
	// 		}
	// 		this.ydir += stick.ydir/2;
	// 		this.lastHit = stick.name;
	// 	}
	// }

	this.edge = function(){
		return (this.y-this.r < 0 || this.y+this.r > height);
	}

	this.goal = function(){
		if (this.x-this.r < 0){
			return "left";
		}
		else if (this.x+this.r > width){
			return "right";
		}
	}

	this.match = function(side){
		return(this.lastHit === side);
	}

	this.reset = function(){
		this.x = width/2;
		this.y = height/2;
		this.r = 20;
		this.lastHit = 'none';

		this.yspeed = 2.2;
		this.xspeed = 2.2;

		if (int(random(2))){
			this.xdir = -1;
			this.ydir = random(-1,1);
		}
		else{
			this.xdir = 1;
			this.ydir = random(-1,1);
		}

		while(this.ydir === 0){
			this.ydir=random(-1,1);
		}
	}

}
