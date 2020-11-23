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


    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.sling.pointB
       line(pointA.x,pointA.y,
        pointB.x,pointB.y)
                       

        }
              
    }

    fly(){

   this.sling.bodyA = null

    }

}



















