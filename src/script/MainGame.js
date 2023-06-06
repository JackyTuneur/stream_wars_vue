import Displayer from "./Displayer";
import EventSystem from "./EventSystem";
import AssetsManager from "./assets/AssetsManager";

/**
 * The main class of the game, in that way we can make a game as we wan't !
 */
class MainGame{

    /**
     * This construct and add to the page the canvas of a pixi.js Application
     * @param {Application} pixiApp a Pixi Application
     */
    constructor(pixiApp){
        this.setup(pixiApp);
        this.assets = new AssetsManager(this);
    }

    /**
     * The setup function is called only once before load all the assets
     * @param {Application} pixiApp 
     */
    setup(pixiApp){
        this.pixiApp = pixiApp;
        this.pixiApp.renderer.view.style.display = "block";
        this.pixiApp.renderer.autoResize = true;
        this.pixiApp.renderer.resize(window.innerWidth, window.innerHeight);
    }

    /**
     * The launcGame function is called after loading all the assets !
     */
    launchGame(){
        this.displayer = new Displayer(this);
        this.eventSystem = new EventSystem(this);
        this.globalMapPosition = { x: 0, y: 0}
    }


}

export default MainGame;