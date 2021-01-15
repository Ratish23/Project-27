class Ball{
    constructor(x,y,r){

        var options={
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:0.5

        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}