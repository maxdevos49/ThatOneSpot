//Block Jumper Main
//Max DeVos September 3, 2017
//

function init(){

	//setup canvas
	gameCanvas = document.getElementById('gameCanvas');
  	canvas = gameCanvas.getContext('2d');

  	//declare some game variables that independent of the level
  	Hcanvas = 600;
  	Wcanvas = 1200;
  	gridSize = 10;
  	Hgrid = 60;
  	Wgrid = 120;
    level = 0;
  	color = ["Red","Orange","Yellow","Green","Blue","Purple"];
  	mouse = "up";
    speed = 0;
    gravity = -5;

    XM_Comp = gameCanvas.offsetLeft;
    YM_Comp = gameCanvas.offsetTop;

    //load required starting scene data
    menuData();

  	//add event listeners

  	gameCanvas.addEventListener("mousedown", onMouseDown);
  	gameCanvas.addEventListener("mouseup", onMouseUp);
  	gameCanvas.addEventListener("mousemove", onMouseMove);
    window.addEventListener("keyup", onKeyUp);
  	window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keypress", onKeyPress);


  	setInterval(draw,1000/60);

}

function sceneTransfer(transferKeyword){

  if (transferKeyword == "Play"){
    scene = "blockJumper";
    gameCanvas.style.cursor = "crosshair";
    level++;
    levelData(level);

  }else if(transferKeyword == "menu"){
    scene = "mainMenu";
    gameCanvas.style.cursor = "default";
    memuData();
  }else if (transferKeyword == "mapEditor"){
    scene = "mapMaker";
    gameCanvas.style.cursor = "crosshair";
    levelData(level);

    document.getElementById('case').innerHTML = "<p>Press the C key to cycle through colors. When finished click the generate code button and then copy and paste the code into the level data file.</p><textarea id='backgroundCode'></textarea><button onclick='saveBackground()'>Generate Code</button>";

  }
}

function saveBackground(){

  //get the text area as an element
  backgroundCodeElement = document.getElementById('backgroundCode');

  codeText = "activeColor = 0;\nlevelRow = [];\npalette = [";

  for (incr1 = 0; incr1 < (palette.length); incr1++){
    codeText += "'" + palette[incr1] + "',";
  }

  codeText += "'violet'];\n";

  //make a variable containing the new variables as text
  for (incr1 = 0; incr1 < Hgrid; incr1++){
    codeText += "levelRow[" + incr1 + "] = [";
    for(incr2 = 0; incr2 < Wgrid; incr2++){

      codeText += levelRow[incr1][incr2] + ",";

    }

    codeText += "0];\n"
  }

  backgroundCodeElement.value = codeText;

}






