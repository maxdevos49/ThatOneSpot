//Block Jumper Draw functi
//Max DeVos September 3, 2017
//

function draw(){


	//draw Main Menu Scene
	if (scene == "mainMenu"){

		levelData(0);
		//background ---> will change later to a hopefully cooler background
		for (incr1 = 0; incr1 < Hgrid; incr1++){
			for(incr2 = 0; incr2 < Wgrid; incr2++){

				color1 = levelRow[incr1][incr2];

				canvas.fillStyle = palette[color1];
				canvas.fillRect(gridSize*incr2,gridSize*incr1,gridSize,gridSize);
			}
		}

		//font, color, and size for title
		canvas.fillStyle = "red";
		canvas.font = (gridSize*4) + "px Aldrich";

		//title
		canvas.fillText("Block Jumper", X_mText[0],Y_mText[0]);

		//three button options
		canvas.fillRect(X_mButton[0], Y_mButton[0], W_mButton,H_mButton);

		canvas.fillRect(X_mButton[1], Y_mButton[1], W_mButton,H_mButton);

		canvas.fillRect(X_mButton[2], Y_mButton[2], W_mButton,H_mButton);

		//font, color, and size for button labels
		canvas.fillStyle = "white";
		canvas.font = (gridSize*4) + "px Aldrich";

		//three button labels
		canvas.fillText("Play", X_mText[1], Y_mText[1]);

		canvas.fillText("Controls", X_mText[2], Y_mText[2]);

		canvas.fillText("Create Map", X_mText[3], Y_mText[3]);

		//highlight buttons for mouse hover event
		for (incr1 = 0; incr1 < 3; incr1++){
			if (active_mButton[incr1] == 1){
				canvas.save();
				canvas.globalAlpha = 0.7;
				canvas.fillStyle = "Grey";
				canvas.fillRect(X_mButton[incr1],Y_mButton[incr1],W_mButton,H_mButton);
				canvas.restore();
			}
		}
	}

	//next scene
	if (scene == "mapMaker"){//editor rendering

		canvas.fillStyle = "black"; 
		canvas.fillRect(0,0,Wgrid*gridSize,Hgrid*gridSize)

		for (incr1 = 0; incr1 < Hgrid; incr1++){
			for(incr2 = 0; incr2 < Wgrid; incr2++){

				color1 = levelRow[incr1][incr2];

				canvas.fillStyle = palette[color1];
				canvas.fillRect(gridSize*incr2,gridSize*incr1,gridSize,gridSize);
			}
		}

		//show active drawing color
		canvas.fillStyle = palette[activeColor];
		canvas.fillRect(0,0,4*gridSize,4*gridSize);

	}

	if (scene == "blockJumper"){//game rendering

		canvas.fillStyle = "black"; 
		canvas.fillRect(0,0,Wgrid*gridSize,Hgrid*gridSize)

		for (incr1 = 0; incr1 < Hgrid; incr1++){
			for(incr2 = 0; incr2 < Wgrid; incr2++){

				color1 = levelRow[incr1][incr2];

				canvas.fillStyle = palette[color1];
				canvas.fillRect(gridSize*incr2,gridSize*incr1,gridSize,gridSize);
			}
		}

		//move player
		if (move == "left" && active == "True"){
			if (speed < 20){
				speed = speed + moveSpeed;
			}

			X_pGrid -= speed;
			
		}else if(move == "right" && active == "True"){

			if (speed < 20){
				speed = speed + moveSpeed;
			}

			X_pGrid += speed;
		}

		//Add friction to the player
		if (speed != 0){
			speed = speed * friction;
			if (move == "left"){
				X_pGrid -= speed;
			}else if(move == "right"){

				X_pGrid += speed;
			}
			if (speed < 0.05){
				speed = 0;
				move = "inactive";
			}
		}

		//draw player
		canvas.fillStyle = playerColor;
		canvas.fillRect(X_pGrid,Y_pGrid,2 *gridSize,4*gridSize);
	}

}