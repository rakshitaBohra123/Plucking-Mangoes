class Ground{
    constructor(x,y){
    
    var options={
    isStatic:true,
    restitution:0,
    friction:0,
    density:1.2
    
    }
    this.body=Bodies.rectangle(x,y,700,20,options)
    this.width=700;
    this.height=20;
    World.add(world,this.body);
    }
    display(){
    fill("brown")
    rectMode(CENTER)
    rect(0,0,this,width,this.height)
    }
    
    
    
    
    
    
    
    
    }
