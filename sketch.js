const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(500,650);

   for(i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
}

}

function draw(){
    background(0);

    
    drop.display();
}   

