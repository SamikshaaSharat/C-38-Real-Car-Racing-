class Game {
    constructor(){}
  
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
      car1  = createSprite(100,200);
      //added the images 
      car1.addImage("car1",car1_img);
      car2 = createSprite(300,200);
      //added the images 
      car2.addImage("car2" , car2_img);
      car3 = createSprite(500,200);
      //added the images 
      car3.addImage("car3",car3_img);
      car4 = createSprite(700,200);
      //added the images 
      car4.addImage("car4",car4_img);
      cars = [car1 , car2 , car3 , car4]
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        //var display_position = 130;
        background(rgb(198,135,103));
        image(track , 0,-displayHeight*4, displayWidth , displayHeight*5);
        var index = 0;
        //to align the car 
        var x =175;
        var y;

        for(var plr in allPlayers){
         index = index+1;
         x=x+200;
         y = displayHeight - allPlayers[plr].distance;
         cars[index-1].x = x;
         cars[index-1].y = y;


          if (index === player.index){
              cars[index-1].shapeColor = "red";
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y;


          }
            
  
          //display_position+=20;
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
//end the game when car reaches endline 
      if(player.distance>3860){
        gameState = 2;
      }

      drawSprites();

    }
//to end 
    end(){
      console.log("Game Ended");

    }
  }