class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.1,
            'friction':1,
            'density':0.44
        }
        
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius
        this.image=loadImage("paper.png");
       
        World.add(world, this.body);
    }
    display(){
        
        ellipseMode(RADIUS);

        fill("yellow");

        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius);

    }       
};