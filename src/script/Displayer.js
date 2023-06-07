import Player from "./entity/Player";
import Map from "./map/Map";

/**
 * The Displayer is the class that allow to display on the app without go 
 * directly on the MainGame class
 */
class Displayer{

    tileSize = 60;
    spriteSize = 100;

    /**
     * @param {MainGame} gameManager 
     */
    constructor(gameManager){
        
        this.gameManager = gameManager;
        this.Player = new Player(this.gameManager, "player-sprite_sheet", 30, 3, 4, this.spriteSize);
        this.map = new Map(this.gameManager, [[{textureName: "player-sprite_sheet"}]], this.tileSize);

    }


}

export default Displayer;