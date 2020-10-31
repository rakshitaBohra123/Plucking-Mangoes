class Boy{
    constructor(x,y){
    
    var options={
    isStatic:true,
    restitution:0,
    friction:0,
    density:1.2
    
    }
    this.body=Bodies.rectangle(x,y,30,90,options)
    this.width=30;
    this.height=90;
    this.image=loadImage("boy.png");
    World.add(world,this.body);
    }
    display(){
    rectMode(CENTER)
    rect(0,0,this,width,this.height)
    }
    
    
    
    
    
    
    
    
    }