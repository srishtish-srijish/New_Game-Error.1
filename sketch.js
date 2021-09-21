var back1,back1_img;
var gameState="play";
var detective,detective_img;
var coinsGroup,coin_image;
var ghostsGroup,ghost_image;
var redsGroup,red_image;
var purplesGroup,purple_image;
var greensGroup,green_image;
var diamondsGroup,diamond_image;
var blueGroups,blue_image;
var clpp,clpp_image;
var sadd,sad_image;

var detective_collided, detective_scare;
var screen=0;
var start_bg;
var score = 0,life=3;
var mid_bg;
var win_bg;


var sn,mute_btn;

function preload(){
  back1=loadImage("images/STAIi.gif");
  detective_img=loadAnimation("images/DEC.png");
  coin_image=loadImage("images/COIN.png");
  red_image=loadImage("images/red.png");
  purple_image=loadImage("images/purple.png");
  green_image=loadImage("images/green.png");
  diamond_image=loadImage("images/diamond.png");
  blue_image=loadImage("images/blue.png");
  ghost_image=loadImage("images/ghost.gif");
  detective_collided=loadAnimation("images/DECHAP.png");
  detective_scare=loadAnimation("images/DECSCARE.png");
  start_bg=loadImage("images/SCREEN.png");
  mid_bg=loadImage("images/mid.png");
  clpp_image=loadImage("images/clpp.png");
  win_bg=loadImage("images/flower.jpg");
  sad_image=loadImage("images/sadd.jpg");
  sadd=loadImage("images/sad.png");
  sn=loadSound("First game.mp3"); 
   
 
}

function setup() {
  
  var can=createCanvas(800,800);
   sn.play();
  can.mouseClicked(mp);
 

  
  mute_btn = createImg('images/mute.png');
  mute_btn.position(width-50,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);

  detective=createSprite(400,600,50,50);
 detective.addAnimation("happy",detective_img);
 detective.scale=0.5


   coinsGroup=new Group();
  ghostsGroup=new Group();
  redsGroup=new Group();
  purplesGroup=new Group();
  greensGroup=new Group();
  diamondsGroup=new Group();
  bluesGroup=new Group();

}

function draw() {

  switch(screen){
    case 0:first();
           break;
    case 1: Second();
            break;
    case 2: Third();
            break;
    case 3: Fourth();
    drawSprites();
            break;
   case 8:Fifth();
           break;            
               
    default: break;
  }
  
  if(gameState==="play" && screen==3) {
    if( keyDown("left_arrow")){
     detective.x=detective.x-3;
    }

     if( keyDown("right_arrow")){
      detective.x=detective.x+3;
     }

     if( keyDown("up_arrow")){
      detective.velocityY=-10;
     }

  if(detective.isTouching(coinsGroup)){
    detective.addAnimation("happy",detective_collided)
    detective.changeAnimation( "happy");
    score = score+1; 
    coinsGroup.get(0).destroy()
   
  }

if(detective.isTouching(ghostsGroup)){
  if(life>1){
  //console.log("hit")
  detective.addAnimation("scare",detective_scare)
  detective.changeAnimation("scare");
  life=life-1;
  ghostsGroup.get(0).destroy()
  
    //console.log(life);
  
 }else if(life===1){
  
   gameState ="end";

}
}
}
}

//mansion image screen
function first(){
  background(start_bg);


 // background(96, 157, 255)
  fill("yellow");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("WELCOME",width/2,height/2);
  text("WELCOME",width/2,height/2);
  text("WELCOME",width/2,height/2);
  text("WELCOME",width/2,height/2);

  fill("white");
  textSize(20);
  strokeWeight(2);
  textAlign(CENTER);
  text("click on the SCREEN to know the rules ",width/2,height/1.5+20);

 gameState="play";
  reset();
}

//screen with "two game" text
function Second(){
  background("black");
  fill("yellow");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("TWO GAMES:-",width/2,height/2);
  gameState="play";
}

//screen with "rules" text
function Third(){
  background("black");
 
  fill("yellow");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("RULES:-",width/2,height/2);
  gameState="play";
}
 
//screen where detective moves
function Fourth(){
  if(gameState==="play"){
   var can=createCanvas(800,800);
   background(back1); 
   
   textSize(20);
   fill(0);
   text("Score:"+score, 480, 30);
   text("life"+life,480,50)
   
   detective.velocityY=1;
  
   SpawnCoins()
     SpawnGhosts()
     Spawnreds();
     Spawnblues();
     Spawndiamonds();
     Spawngreens();
     Spawnpurples();

    
  }
 }

 if(score=5){
  Fifth();
}


/*function FirstScreen(){
  if(gameState==="end"){
    var can=createCanvas(800,800);
    
 background(sad_image);
 
  coinsGroup.destroyEach();
 ghostsGroup. destroyEach();

 fill("red");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("ALAS!!",width/2,height/2);
  text("you have LOST the Game",400,450);
  fill("black");
  textSize(25);
  strokeWeight(2);
  textAlign(CENTER);

 text("Click on the screen to restart the  game",400,550);

  reset();
  drawSprites();
  }
  
}

function secondScreen(){
 if(gameState==="achieved"){
   console.log("achieved")
   var can=createCanvas(800,800);
   
  background(win_bg);
  
  
   clpp=createSprite(300,200);
   clpp.addImage(clpp_image);
   clpp.scale=0.4;

   
  fill("red");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("Congratulation!!",width/2,height/2);
  text("you have WON the Game",350,450);
  fill("black");
  textSize(25);
  strokeWeight(2);
  textAlign(CENTER);
 text("Click on the screen to play the next game",350,550);
 
  gameState="next";
  screen=5;
  
  }
}

 function secondRule(){
   if(gameState==="next"  && screen===5){
    var can=createCanvas(800,800);
   
   background("black");
  fill("red");
  textSize(40);
  strokeWeight(2);
  textAlign(CENTER);
  text("Rule:-",width/2,height/2);
  screen=6;
 }
 }
 function nextlevel(){
  if(gameState="next"){
  var can=createCanvas(800,800);
  background(mid_bg);
  
  console.log("achieved") 
  clpp.visible=false;
*/
  
/*Spawnreds();
Spawnblues();
Spawndiamonds();
Spawngreens();
Spawnpurples();
 screen=7;

  }
  
}*/

function SpawnCoins(){
  if (frameCount %100=== 0) { 
var coin = createSprite(200, -50);
coin.x = Math.round(random(400,400)); 
coin.addImage(coin_image);
coin.velocityY = 5; 
coin.lifetime = 800;
coin.scale=0.2
coinsGroup.add(coin); 
}
}

function Spawnreds(){
  if (frameCount %100=== 0) { 
var red = createSprite(200, -50);
red.x = Math.round(random(100,100)); 
red.addImage(red_image);
red.velocityY = 5; 
red.lifetime = 800;
red.scale=0.2
redsGroup.add(red); 
}
}
function Spawnblues(){
  if (frameCount %150=== 0) { 
var blue = createSprite(200, -50);
blue.x = Math.round(random(250,250)); 
blue.addImage(blue_image);
blue.velocityY = 5; 
blue.lifetime = 800;
blue.scale=0.2
bluesGroup.add(blue); 
}
}
function Spawndiamonds(){
  if (frameCount %1000=== 0) { 
var diamond = createSprite(200, -50);
diamond.x = Math.round(random(400,400)); 
diamond.addImage(diamond_image);
diamond.velocityY = 5; 
diamond.lifetime = 800;
diamond.scale=0.2
diamondsGroup.add(diamond); 
}
}
function Spawngreens(){
  if (frameCount %250=== 0) { 
var green = createSprite(200, -50);
green.x = Math.round(random(590,590)); 
green.addImage(green_image);
green.velocityY = 5; 
green.lifetime = 800;
green.scale=0.2
greensGroup.add(green); 
}
}
function Spawnpurples(){
  if (frameCount %500=== 0) { 
var purple = createSprite(200, -50);
purple.x = Math.round(random(700,700)); 
purple.addImage(purple_image);
purple.velocityY = 5; 
purple.lifetime = 800;
purple.scale=0.2
purplesGroup.add(purple); 
}
}


function SpawnGhosts(){
  if (frameCount%150=== 0) { 
var ghost = createSprite(200, -50);
ghost.x = Math.round(random(200,400)); 
ghost.addImage(ghost_image);
ghost.velocityY = 5; 
ghost.lifetime = 800;
ghost.scale=0.5
ghostsGroup.add(ghost); 
}
}

function  Fifth(){
 
  background(0);
  textAlign(CENTER);
  text("game over",width/2,height/2)
  text("SCORE = " + score, width / 2, height / 2 + 20)
  text("click to play again",width/2,height/2+40);

 reset();

}

function reset(){
  gameState = "play";
  score=0;
  life=3;

}



function mp(){
  
  if ( screen==0){
    screen=1
  }
  else if(screen==1){
    screen=2
  }
  else if(screen==2){
    screen=3
  }
   else if(screen==3){
    screen=4
}
else if(screen==5){
  screen=6
}

}



function mute()
{
  if(sn.isPlaying())
     {
      sn.stop();
     }
     else{
      sn.play();
     }
}
