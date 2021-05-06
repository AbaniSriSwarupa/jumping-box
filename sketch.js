var canvas;
var music;
var block1,block2,block3,block4
var box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
block1 = createSprite(0,580,360,30)
block1.shapeColor = "red"
block2= createSprite(295,580,360,30)
block2.shapeColor = "green"
block3 = createSprite(515,580,360,30)
block3.shapeColor = "yellow"
block4 = createSprite(740,580,360,30)
block4.shapeColor = "pink"
    //create 4 different surfaces



    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40)
    box.shapeColor = "white"
    box.velocityX = 5;
    box.velocityY = 9;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1)){
       box.bounceOff(block1)
       box.shapeColor = "red"
    }
    if(box.isTouching(block2)){
        box.velocityX = 0
        box.velocityY = 0
        box.shapeColor = "green"
    }
    if(box.isTouching(block3)){
        box.bounceOff(block3)
        box.shapeColor = "yellow"
    }
    if(box.isTouching(block4)){
        box.bounceOff(block4)
        box.shapeColor = "pink"
    }
    drawSprites();
}
