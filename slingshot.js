class Slingshot{

    constructor(a,b){
        
    var options={
     bodyA:a, 
     pointB:b,
     length:10,
     stiffness:0.04,
    }   
    this.sling = Matter.Constraint.create(options);
    World.add(world,this.sling)
    this.sling1 = loadImage("sprites/sling1.png")
   this.sling2 = loadImage("sprites/sling2.png")
    this.sling3 = loadImage("sprites/sling3.png")

    }

    display(){
        image(this.sling1,200,25)
        image(this.sling2,170,25)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.sling.pointB
       line(pointA.x - 30,pointA.y + 20,pointB.x - 20,pointB.y - 15);
       line(pointA.x - 30,pointA.y + 20,pointB.x + 20,pointB.y - 20);
     if(pointA.x  < 220 )
     {image(this.sling3, pointA.x  - 30, pointA.y  - 10 ,15,30)}
     else{image(this.sling3, pointA.x  + 20, pointA.y  - 10 ,15,30)}                  

        }
              
    }

    fly(){

   this.sling.bodyA = null

    }

}



















