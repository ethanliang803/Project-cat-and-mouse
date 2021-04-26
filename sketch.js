var backGround, backGroundImg
var cat, catImg, catImg2
var mouse, mouseImg, mouseImg2, mouseImg3

function preload() {

    backGroundImg = loadImage("garden.png")
    catImg = loadImage("cat1.png");
    mouseImg = loadImage("mouse1.png");
    mouseImg2 = loadImage("mouse2.png");
}

function setup(){
    createCanvas(1000,800);

    backGround = createSprite(0, 0, 1000, 800);
    backGround.addImage(backGroundImg);

    cat = createSprite(250, 200, 30, 10);
    cat.addImage(catImg);

    mouse = createSprite(200, 200, 10, 30);
    mouse.addImage(mouseImg);

}

function draw() {

    background(backGround);

    if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {

        cat.velocityX = 0;

        cat.addImage(catImg2);
        mouse.addImage(mouseImg3);

    }

    drawSprites();
}


function keyPressed(){

    if (keyDown.leftArrow) {
        mouse.addImage(mouseImg2);

        cat.velocityX = 2;
    }


}
