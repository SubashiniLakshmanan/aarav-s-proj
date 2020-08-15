class BallClass{
    constructor(x, y, radius, angle) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0,
            'isStatic': false
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
       
        push();
        rectMode(CENTER)
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,this.radius, this.radius);
        pop();
      }
}
