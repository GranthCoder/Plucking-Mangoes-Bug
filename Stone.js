class Stone{
    constructor(){

        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.stone = Bodies.rectangle(225,height-175,30,30,options);
        this.image = loadImage("stone.png");
        World.add(world,this.stone);
        
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.stone.position.x,this.stone.position.y,30,30);
    }
}