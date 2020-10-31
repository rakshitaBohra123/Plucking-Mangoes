class Mango{
    constructor(x,y){
    
    var options={
    isStatic:true,
    restitution:1.0,
    friction:0,
    density:1.2
    
    }
    this.body=Bodies.circle(x,y,20,20,options)
    this.width=20;
    this.height=20;
    this.image=loadImage("Mango.png");
    World.add(world,this.body);
    }
    display(){
    ellipseMode(CENTER)
    rect(0,0,this,width,this.height)
    }
    
    
    
    
    
    
    
    
    }