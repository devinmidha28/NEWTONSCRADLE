class Rope {
    constructor (A, B, Xoffset, Yoffset) {

    
    this.Xoffset=Xoffset
    this.Yoffset=Yoffset

    var options = {
        bodyA:A,
        bodyB:B,stiffness:0.5,length:500,pointB:{
            x:this.Xoffset, y:this.Yoffset
        }

    }

    this.slingshot=constraint.create(options);
    World.add(world,this.slingshot);


}



display (){
    strokeWeight(5);
    line (this.slingshot.bodyA.position.x, this.slingshot.bodyA.position.y, this.slingshot.bodyB.position.x + this.Xoffset, this.slingshot.bodyB.position.y + this.Yoffset); 

    }
 

    
}