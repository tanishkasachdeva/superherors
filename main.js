var canvas = new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";
function player_uptade(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    })
}
function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftkey == true && keyPressed == '80'){
        console.log("P and shift key is pressed together");
        block_image_height=block_image_height + 10;
        block_image_width=block_image_width +10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftkey == true && keyPressed == '77'){
        console.log("M and shift key is pressed together");
        block_image_height=block_image_height - 10;
        block_image_width=block_image_width - 10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(keyPressed == '38'){
      console.log("up");
      up();
    }
    if(keyPressed == '40'){
        console.log("down");
        down();
      }
      if(keyPressed == '37'){
        console.log("left");
        left();
      }
      if(keyPressed == '39'){
        console.log("right");
        right();
      }
      if( keyPressed == '73' && keyPressed == '70'){
          new_image("ironman_face.png");
          console.log("I and F is pressed together");
      }
      if( keyPressed == '73' && keyPressed == '76'){
        new_image("ironman_left_hand.png");
        console.log("I and H is pressed together");
    }
    if( keyPressed == '73' && keyPressed == '82'){
        new_image("ironman_right_hand.png");
        console.log("I and R is pressed together");
    }
    if( keyPressed == '73' && keyPressed == '66'){
        new_image("ironman_body.png");
        console.log("I and B is pressed together");
    }
    if( keyPressed == '73' && keyPressed == '76'){
        new_image("ironman_legs.png");
        console.log("I and L is pressed together");
    }



    if( keyPressed == '72' && keyPressed == '70'){
        new_image("hulk_face.png");
        console.log("H and F is pressed together");
    }
    if( keyPressed == '72' && keyPressed == '76'){
        new_image("hulk_left_hand.png");
        console.log("H and L is pressed together");
    }
    if( keyPressed == '72' && keyPressed == '82'){
        new_image("hulk_right_hand.png");
        console.log("H and R is pressed together");
    }
    if( keyPressed == '72' && keyPressed == '66'){
        new_image("hulk_body.png");
        console.log("H and B is pressed together");
    }
    if( keyPressed == '72' && keyPressed == '69'){
        new_image("hulk_legs.png");
        console.log("H and L is pressed together");
}
}

function up(){
    if(player_y>=0){
      player_y = player_y - block_image_height;
      console.log("block image height = " + block_image_height);
      console.log("when up arrow key is pressed X = "+player_x+",Y = "+player_y);
      canvas.remove(player_object);
      player_uptade();
    }
}

function down(){
    if(player_y<=500){
      player_y = player_y + block_image_height;
      console.log("block image height = " + block_image_height);
      console.log("when down arrow key is pressed X = "+player_x+",Y = "+player_y);
      canvas.remove(player_object);
      player_uptade();
    }
}

function left(){
    if(player_x>=0){
      player_x = player_x - block_image_width;
      console.log("block image width = " + block_image_width );
      console.log("when left arrow key is pressed X = "+player_x+",Y = "+player_y);
      canvas.remove(player_object);
      player_uptade();
    }
}

function right(){
    if(player_x<=850){
      player_x = player_x + block_image_width;
      console.log("block image width = " + block_image_width);
      console.log("when right arrow key is pressed X = "+player_x+",Y = "+player_y);
      canvas.remove(player_object);
      player_uptade();
    }
}

