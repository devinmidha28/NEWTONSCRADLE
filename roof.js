class Roof {
    constructor(x,y,width,height){

        var options = {
            isStatic: true
        } 
        this.object=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.object);
        this.width=width;
        this.height=height


    }
    
    display() {
        push();
        rectMode (CENTER);
        translate(this.object.position.x, this.object.position.y);
        rect(0,0, this.width, this.height);
        pop();

    }
    

}
