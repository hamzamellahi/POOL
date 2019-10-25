class sceneLoader {
	constructor(){
		this.scenes = ["Menu", "Controls", "Game", "levels"];
		this.activeScene = this.scenes[0];
	}

	getActiveScene(){
		return this.activeScene;
	}

	loadScene(scene){
		if(scene.constructor == Number)
			this.load(scene);
		else if(scene.constructor == String)
			this.load(this.scenes.indexOf(scene));
		else
			return;
	}

	load(index){
		/*
			index ??
				1 : display Menu
				2 : display Controls
				3 : Game
				4 : Level
		*/
		this.activeScene = this.scenes[index];
		console.log(this.activeScene);
		if(index == 0){
			let bcSprite = sprites.main_menu_background;
			let labels = [ new Label(TITLE_TEXT, TITLE_POSITION, TITLE_COLOR),
						    new Label(COMMENT_TEXT, COMMENT_POSITION, COMMENT_COLOR, COMMENT_SIZE)];

			let buttons = [ new Button(PVP_TEXT, PVP_BUTTON_POS, PVP_BUTTON_COLOR , PVP_BUTTON_BC, PVP_BUTTON_SIZE),
							new Button(PVC_TEXT, PVC_BUTTON_POS, PVC_BUTTON_COLOR , PVC_BUTTON_BC, PVC_BUTTON_SIZE),
							new Button(SMUTE_TEXT, SMUTE_BUTTON_POS, SMUTE_BUTTON_COLOR, SMUTE_BUTTON_BC, SMUTE_BUTTON_SIZE)];
			new Menu(bcSprite, buttons, labels);
		}else if(index == 3){

			background(dark);
			image(sprites.bc,0,0);

			// Draw Balls
			for(let i = 0; i < balls.length; i++){
				balls[i].draw();
				balls[i].update();
				checkForCollitions(i);
			}

			if(stick.visible){
				stick.update();
				stick.draw();
			}

		}else if(index == 4){
			let bcSprite = sprites.main_menu_background.png;
			let labels = [  new Label(LEVELS_TEXT, LEVELS_POSITION, LEVELS_COLOR),
							new Label(TITLE_TEXT, TITLE_POSITION, TITLE_COLOR),
						    new Label(COMMENT, COMMENT_POSITION, COMMENT_COLOR, COMMENT_SIZE)];

			let buttons = [ new Button(PVP_TEXT, PVP_BUTTON_POS, PVP_BUTTON_COLOR , PVP_BUTTON_BC, PVP_BUTTON_SIZE),
							new Button(PVC_TEXT, PVC_BUTTON_POS, PVC_BUTTON_COLOR , PVC_BUTTON_BC, PVC_BUTTON_SIZE),
							new Button(SMUTE_TEXT, SMUTE_BUTTON_POS, SMUTE_BUTTON_COLOR, SMUTE_BUTTON_BC, SMUTE_BUTTON_SIZE)];
			new Menu(bcSprite, buttons, labels);

		}
	}
}
const SceneLoader = new sceneLoader();
