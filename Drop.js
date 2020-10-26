class Drop
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.4,
			friction:0.5,
            density:1.4,
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, 10, options)
		World.add(world, this.body);

	}

	reset() {
		this.body.position.y = 0;
	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill("blue")
			ellipse(0,0,10, 10);
			pop()
			
	}

}