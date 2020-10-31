class Tree{
constructor(x,y){

var options={
isStatic:true,
restitution:0,
friction:0,
density:1.2

}
this.body=Bodies.rectangle(x,y,90,200,options)
this.width=90;
this.height=200;
this.image=loadImage("tree.png");
World.add(world,this.body);
}
display(){
rectMode(CENTER)
rect(0,0,this,width,this.height)
}








}