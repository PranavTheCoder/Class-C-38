var canvas, backgroundImage;

var carImage1,carImage2,carImage3,carImage4;

var track;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car_1,car_2,car_3,car_4,cars;

function preload() {
  track = loadImage("images/track.jpg");
  carImage1 = loadImage("images/car1.png");
  carImage2 = loadImage("images/car2.png");
  carImage3 = loadImage("images/car3.png");
  carImage4 = loadImage("images/car4.png");
  backgroundImage = loadImage("images/ground.png");

}

function setup() {
  canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount === 4) {
    game.update(1);
  }
  if(gameState === 1) {
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end();
  }
}
