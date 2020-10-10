var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1 , car2 , car3 , car4 , cars;
var track , car1_img ,car2_img , car3_img , car4_img ;

function preload(){
  //load images of the cars and the track 
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");
  track  = loadImage("track.jpg");

}



function setup(){
    //to make the game fit properly in all devices 
  canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  //to end the game 
  if(gameState === 2){
    game.end();
  }
}