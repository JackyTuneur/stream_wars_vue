import Displayer from "./Displayer";
import EventSystem from "./EventSystem";

/**
 * The main class of the game, in that way we can make a game as we wan't !
 */
class MainGame{

    /**
     * This construct and add to the page the canvas of a pixi.js Application
     * @param {Application} pixiApp a Pixi Application
     */
    constructor(pixiApp){

        this.pixiApp = pixiApp;
        this.pixiApp.renderer.view.style.display = "block";
        this.pixiApp.renderer.autoResize = true;
        this.pixiApp.renderer.resize(window.innerWidth, window.innerHeight);

        this.displayer = new Displayer(this);
        this.eventSystem = new EventSystem(this);

        this.globalMapPosition = { x: 0, y: 0}
    }


}

export default MainGame;