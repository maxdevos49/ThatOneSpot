//Block Jumper Events
//Max DeVos September 3, 2017
//

function onMouseDown(e){

	x = e.clientX - XM_Comp;
	y = e.clientY - YM_Comp;

	mouse = "down";

	if (scene == "mainMenu"){


		if(x > X_mButton[0] && x < (X_mButton[0] + W_mButton) && y > Y_mButton[0] && y < (Y_mButton[0] + H_mButton)){
			//change scene to gameplay
			sceneTransfer("Play");
		}else if(x > X_mButton[1] && x < (X_mButton[1] + W_mButton) && y > Y_mButton[1] && y < (Y_mButton[1] + H_mButton)){
			//show controls

		}else if(x > X_mButton[2] && x < (X_mButton[2] + W_mButton) && y > Y_mButton[2] && y < (Y_mButton[2] + H_mButton)){
			//change to map builder scene
			sceneTransfer("mapEditor");

		}
		
	}

	if (scene == "mapMaker"){

		//figure out where the click was
		Xremain = x % 10;
		Yremain = y % 10;

		//narrow it to a grid cube
		XgridPos = (x - Xremain)/10;
		YgridPos = (y - Yremain)/10;

		console.log("XGrid: " + XgridPos + " YGrid: " + YgridPos);

		//change that block color to the activecolor color
		levelRow[YgridPos][XgridPos] = activeColor;

	}

}

function onMouseUp(e){

	x = e.clientX - XM_Comp;
	y = e.clientY - YM_Comp;

	mouse = "up";

	console.log("X:"+ x +" Y:"+y);


}

function onMouseMove(e){

	x = e.clientX - XM_Comp;
	y = e.clientY - YM_Comp;

	if (scene == "mainMenu"){

		for (incr1 = 0; incr1 < 3; incr1++){
			//playButt
			if(x > X_mButton[incr1] && x < (X_mButton[incr1] + W_mButton) && y > Y_mButton[incr1] && y < (Y_mButton[incr1] + H_mButton)){
				active_mButton[incr1] = 1;
			}else{
				active_mButton[incr1] = 0;
			}
		}
	}

	if (scene == "mapMaker" && mouse == "down"){

		//figure out where the click was
		Xremain = x % 10;
		Yremain = y % 10;

		//narrow it to a grid cube
		XgridPos = (x - Xremain)/10;
		YgridPos = (y - Yremain)/10;

		console.log("XGrid: " + XgridPos + " YGrid: " + YgridPos);

		//change that block color to the activecolor color
		levelRow[YgridPos][XgridPos] = activeColor;

	}


}


function onKeyDown(event){

	var key = event.keyCode;

	switch(key){
		case 67://c key
			
			//cycle through the active paint color
			paletteSize = palette.length;

			if (activeColor > paletteSize){
				activeColor = 0;
			}else{
				activeColor++;
			}

			break;
		default:
		//do nothing if key is not recognized

	}
}

function onKeyPress(event){

	var key = event.keyCode;


	switch (key){
		 case 97://left
		 	move = "left";
		 	active = "True";
			break;
		case 100://right
			move = "right";
			active = "True";
			break;
		default:
		//do nothing if key is not recognized
	}
}

function onKeyUp(event){

	var key = event.keyCode;
	console.log("helloooooooo" + key);
	switch (key){
		 case 65://left
		 	active = "False";
		 	console.log("yello");
			break;
		case 68://right
			active = "False";
			break;
		default:
		//do nothing if key is not recognized
	}

}





