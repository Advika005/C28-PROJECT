class Ground{
    constructor(width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(300,655,width,height,options );

        this.width = width;
        this.height = height;

        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}
	
