class Ball{
    constructor(x, y, radius) {
        var options = {
           // isStatic: true,
            'restitution':0.8,
            'friction': 1,
            'density': 1.0
            
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = 50;
       // this.height = height;
        this.image = loadImage("sprites/arrow.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
       translate(this.body.position.x, this.body.position.y);
     // rotate(angle);
        imageMode(CENTER);
        
        image( this.image,0, 0, this.radius, this.radius);
        pop();
      }
}