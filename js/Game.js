class Game {
  constructor() {}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car_1 = createSprite(100,200);
    car_2 = createSprite(300,200);
    car_3 = createSprite(500,200);
    car_4 = createSprite(700,200);
    cars = [car_1,car_2,car_3,car_4]
  }

  play(){
    form.hide();
    textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();    

    if(allPlayers !== undefined){
      var index = 0;
      var x = 0;
      var y;
      //var display_position = 130;
      for(var plr in allPlayers){
        //display_position+=20;
        console.log("i am in 49");
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        console.log("i am in 53");
        cars[index - 1].x = x;
        console.log("i am in 55" + index + "playerIndex" + player.index);
        cars[index - 1].y = y;
        console.log("i am in 57");
        /*textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/
        if(index === player.index) {
          console.log("i am in 57");
          cars[index - 1].shapeColor = "red";
          //console.log("i am in 58");
          //camera.position.x = displayWidth/2;
          //camera.position.y = cars[index - 1].y;
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
  }
}
