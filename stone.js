class Stone{
    constructor(x,y,width,height){
    
    var options={
    isStatic:true,
    restitution:1.0,
    friction:0,
    density:1.2
    
    }
    this.body=Bodies.circle(x,y,this.width,height,options)
    this.width=width;
    this.height=height;
    this.image=loadImage("stone.png");
    World.add(world,this.body);
    }
fly(){
    this.body=null
}
    display(){
    ellipseMode(CENTER)
    
    }
    
    
    
    
    
    
    
    
    }