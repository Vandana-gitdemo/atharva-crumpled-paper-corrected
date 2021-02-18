class Dustbin {
    constructor (x, y){
        var options = { 
            'isStatic': true,
            
            

        }
        this.body = Bodies.rectangle(x, y, 150,10,options);
       
        this.width = 200;
        this.height = 10;
      this.image=loadImage("dustbingreen.png");
        World.add(world, this.body);
        


    }

    display(){
        rectMode(CENTER);
        fill(255);
       // scale(1.3)
        image(this.image,this.body.position.x, this.body.position.y-140,220,150);

    }
}